import React from 'react';

// Debug utilities for development
export class DebugLogger {
  private static isDev = import.meta.env.DEV;
  
  static log(message: string, data?: any) {
    if (this.isDev) {
      console.log(`🔍 [DEBUG] ${message}`, data || '');
    }
  }
  
  static warn(message: string, data?: any) {
    if (this.isDev) {
      console.warn(`⚠️ [WARN] ${message}`, data || '');
    }
  }
  
  static error(message: string, error?: any) {
    if (this.isDev) {
      console.error(`❌ [ERROR] ${message}`, error || '');
    }
  }
  
  static group(label: string, callback: () => void) {
    if (this.isDev) {
      console.group(`📁 ${label}`);
      callback();
      console.groupEnd();
    }
  }
  
  static time(label: string) {
    if (this.isDev) {
      console.time(`⏱️ ${label}`);
    }
  }
  
  static timeEnd(label: string) {
    if (this.isDev) {
      console.timeEnd(`⏱️ ${label}`);
    }
  }
  
  static table(data: any) {
    if (this.isDev) {
      console.table(data);
    }
  }
}

// Performance monitoring
export class PerformanceMonitor {
  private static marks: Map<string, number> = new Map();
  
  static mark(name: string) {
    if (import.meta.env.DEV) {
      this.marks.set(name, performance.now());
      performance.mark(name);
    }
  }
  
  static measure(name: string, startMark: string, endMark?: string) {
    if (import.meta.env.DEV) {
      const end = endMark || `${startMark}-end`;
      this.mark(end);
      performance.measure(name, startMark, end);
      
      const startTime = this.marks.get(startMark);
      const endTime = this.marks.get(end);
      
      if (startTime && endTime) {
        DebugLogger.log(`Performance: ${name}`, `${(endTime - startTime).toFixed(2)}ms`);
      }
    }
  }
}

// React component debugging
export function withDebug<T extends Record<string, any>>(
  Component: React.ComponentType<T>,
  componentName: string
) {
  if (!import.meta.env.DEV) {
    return Component;
  }
  
  return function DebugWrapper(props: T) {
    DebugLogger.group(`🧩 ${componentName} Props`, () => {
      DebugLogger.table(props);
    });
    
    return <Component {...props} />;
  };
}

// Network request debugging
export class NetworkDebugger {
  static logRequest(url: string, options?: RequestInit) {
    if (import.meta.env.DEV) {
      DebugLogger.group(`🌐 Network Request: ${url}`, () => {
        DebugLogger.log('Method', options?.method || 'GET');
        if (options?.headers) {
          DebugLogger.log('Headers', options.headers);
        }
        if (options?.body) {
          DebugLogger.log('Body', options.body);
        }
      });
    }
  }
  
  static logResponse(url: string, response: Response, data?: any) {
    if (import.meta.env.DEV) {
      DebugLogger.group(`📥 Network Response: ${url}`, () => {
        DebugLogger.log('Status', `${response.status} ${response.statusText}`);
        DebugLogger.log('Headers', Object.fromEntries(response.headers.entries()));
        if (data) {
          DebugLogger.log('Data', data);
        }
      });
    }
  }
}

// Global error tracking for debugging
export function setupGlobalErrorHandling() {
  if (import.meta.env.DEV) {
    window.addEventListener('error', (event) => {
      DebugLogger.error('Global Error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
      });
    });
    
    window.addEventListener('unhandledrejection', (event) => {
      DebugLogger.error('Unhandled Promise Rejection', event.reason);
    });
  }
}
