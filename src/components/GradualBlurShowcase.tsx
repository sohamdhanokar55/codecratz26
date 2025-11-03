import React from 'react';
import GradualBlur from './GradualBlur';
import GradualBlurAdvanced from './GradualBlurAdvanced';

const GradualBlurShowcase: React.FC = () => {
  return (
    <div className="space-y-12 py-8">
      {/* Original GradualBlur Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground font-poppins">Original GradualBlur Component</h2>
        <div style={{position: 'relative', height: 400, overflow: 'hidden'}} className="border border-border rounded-lg bg-card">
          <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Scrollable Content</h3>
              <p className="text-muted-foreground">
                This demonstrates the original GradualBlur component with basic blur functionality.
              </p>
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} className="p-4 rounded border border-border bg-card">
                  <h4 className="font-medium text-foreground">Content Block {i + 1}</h4>
                  <p className="text-sm text-muted-foreground">
                    Sample content to demonstrate the blur effect at the bottom of the container.
                  </p>
                </div>
              ))}
            </div>
          </div>
          <GradualBlur
            target="parent"
            position="bottom"
            height="4rem"
            strength={2}
            divCount={5}
            curve="bezier"
            exponential={true}
            opacity={1}
          />
        </div>
      </section>

      {/* Advanced GradualBlur with Presets */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground font-poppins">Advanced GradualBlur with Presets</h2>
        
        {/* Subtle Preset */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">Subtle Preset</h3>
          <div style={{position: 'relative', height: 300, overflow: 'hidden'}} className="border border-border rounded-lg bg-card">
            <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }}>
              <div className="space-y-3">
                <p className="text-muted-foreground">This uses the 'subtle' preset with reduced intensity.</p>
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="p-3 rounded border border-border bg-card">
                    <p className="text-sm text-muted-foreground">Subtle blur effect - Content {i + 1}</p>
                  </div>
                ))}
              </div>
            </div>
            <GradualBlurAdvanced preset="subtle" />
          </div>
        </div>

        {/* Intense Preset */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">Intense Preset</h3>
          <div style={{position: 'relative', height: 300, overflow: 'hidden'}} className="border border-border rounded-lg bg-card">
            <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }}>
              <div className="space-y-3">
                <p className="text-muted-foreground">This uses the 'intense' preset with maximum blur strength.</p>
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="p-3 rounded border border-border bg-card">
                    <p className="text-sm text-muted-foreground">Intense blur effect - Content {i + 1}</p>
                  </div>
                ))}
              </div>
            </div>
            <GradualBlurAdvanced preset="intense" />
          </div>
        </div>

        {/* Smooth Preset with Animation */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">Smooth Preset with Animation</h3>
          <div style={{position: 'relative', height: 300, overflow: 'hidden'}} className="border border-border rounded-lg bg-card">
            <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }}>
              <div className="space-y-3">
                <p className="text-muted-foreground">This uses the 'smooth' preset with animated transitions.</p>
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="p-3 rounded border border-border bg-card">
                    <p className="text-sm text-muted-foreground">Smooth animated blur - Content {i + 1}</p>
                  </div>
                ))}
              </div>
            </div>
            <GradualBlurAdvanced 
              preset="smooth" 
              animated={true}
              duration="0.5s"
              easing="ease-in-out"
            />
          </div>
        </div>

        {/* Custom Configuration */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">Custom Configuration</h3>
          <div style={{position: 'relative', height: 300, overflow: 'hidden'}} className="border border-border rounded-lg bg-card">
            <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }}>
              <div className="space-y-3">
                <p className="text-muted-foreground">Custom configuration with hover effects and exponential curve.</p>
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="p-3 rounded border border-border bg-card">
                    <p className="text-sm text-muted-foreground">Custom blur with hover - Content {i + 1}</p>
                  </div>
                ))}
              </div>
            </div>
            <GradualBlurAdvanced 
              position="bottom"
              height="8rem"
              strength={3}
              divCount={8}
              exponential={true}
              curve="ease-out"
              animated={true}
              hoverIntensity={1.5}
              opacity={0.9}
            />
          </div>
        </div>

        {/* Top Position Example */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">Top Position Header Preset</h3>
          <div style={{position: 'relative', height: 300, overflow: 'hidden'}} className="border rounded-lg">
            <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }}>
              <div className="space-y-3">
                <p className="text-muted-foreground">Header preset with blur at the top of the container.</p>
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="bg-indigo-50 p-3 rounded border">
                    <p className="text-sm text-muted-foreground">Top blur effect - Content {i + 1}</p>
                  </div>
                ))}
              </div>
            </div>
            <GradualBlurAdvanced preset="header" />
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground font-poppins">Feature Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Original GradualBlur</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">✅ Basic blur effects</li>
              <li className="text-muted-foreground">✅ Position control (top, bottom, left, right)</li>
              <li className="text-muted-foreground">✅ Customizable strength and opacity</li>
              <li className="text-muted-foreground">✅ Simple curve options</li>
              <li className="text-muted-foreground">✅ Lightweight implementation</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Advanced GradualBlur</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">✅ All original features</li>
              <li className="text-muted-foreground">✅ Preset configurations</li>
              <li className="text-muted-foreground">✅ Mathematical precision with mathjs</li>
              <li className="text-muted-foreground">✅ Animation and transition support</li>
              <li className="text-muted-foreground">✅ Hover effects</li>
              <li className="text-muted-foreground">✅ Responsive design support</li>
              <li className="text-muted-foreground">✅ Intersection observer integration</li>
              <li className="text-muted-foreground">✅ Advanced curve functions</li>
              <li className="text-muted-foreground">✅ Page-level targeting</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GradualBlurShowcase;
