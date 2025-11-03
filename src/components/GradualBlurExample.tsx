import React from 'react';

const GradualBlurExample: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">Tech Problem Statements</h2>
          <p className="text-muted-foreground text-lg">
            Explore critical challenges in modern technology and entrepreneurship
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-6">
          <div className="card w-96 bg-card shadow-sm border border-border rounded-lg">
            <div className="card-body p-4">
              <h2 className="card-title text-lg font-semibold">Data Privacy Crisis</h2>
              <p className="text-muted-foreground text-sm">How can we protect user data while maintaining seamless digital experiences in our interconnected world?</p>
              <div className="justify-end card-actions flex mt-4">
                <button className="btn btn-primary btn-gradient px-4 py-2 rounded">Explore Solution</button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-card shadow-sm border border-border rounded-lg">
            <div className="card-body p-5">
              <h2 className="card-title text-lg font-semibold">AI Ethics & Bias</h2>
              <p className="text-muted-foreground text-sm">What strategies can ensure artificial intelligence systems remain fair, transparent, and free from discriminatory practices?</p>
              <div className="justify-end card-actions flex mt-4">
                <button className="btn btn-primary btn-gradient px-4 py-2 rounded">Learn More</button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-card shadow-sm border border-border rounded-lg">
            <div className="card-body p-6">
              <h2 className="card-title text-xl font-semibold">Digital Divide Challenge</h2>
              <p className="text-muted-foreground">How do we bridge the technology gap and ensure equal access to digital resources across different communities and regions?</p>
              <div className="justify-end card-actions flex mt-4">
                <button className="btn btn-primary btn-gradient px-4 py-2 rounded">Find Solutions</button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-card shadow-sm border border-border rounded-lg">
            <div className="card-body p-7">
              <h2 className="card-title text-xl font-semibold">Sustainable Technology</h2>
              <p className="text-muted-foreground">What innovative approaches can reduce the environmental impact of technology while maintaining high performance and accessibility?</p>
              <div className="justify-end card-actions flex mt-4">
                <button className="btn btn-primary btn-gradient px-4 py-2 rounded">Discover More</button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-card shadow-sm border border-border rounded-lg">
            <div className="card-body p-8">
              <h2 className="card-title text-2xl font-semibold">Quantum Computing Integration</h2>
              <p className="text-muted-foreground">How can we effectively integrate quantum computing capabilities into existing infrastructure to solve complex computational challenges?</p>
              <div className="justify-end card-actions flex mt-4">
                <button className="btn btn-primary btn-gradient px-4 py-2 rounded">Explore Tech</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradualBlurExample;
