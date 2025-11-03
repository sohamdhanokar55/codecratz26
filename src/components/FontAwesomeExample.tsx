import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faCode, 
  faTrophy, 
  faRocket,
  faLightbulb,
  faUsers,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin, 
  faReact 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faHeart as faHeartRegular 
} from '@fortawesome/free-regular-svg-icons';

export function FontAwesomeExample() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        FontAwesome Icons Examples
      </h2>
      
      {/* Basic Icons */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Basic Icons</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <FontAwesomeIcon icon={faHeart} className="text-red-500 text-2xl" />
          <FontAwesomeIcon icon={faCode} className="text-blue-500 text-2xl" />
          <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-2xl" />
          <FontAwesomeIcon icon={faRocket} className="text-purple-500 text-2xl" />
          <FontAwesomeIcon icon={faLightbulb} className="text-orange-500 text-2xl" />
        </div>
      </div>

      {/* Different Sizes */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Different Sizes</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <FontAwesomeIcon icon={faUsers} className="text-green-500" size="xs" />
          <FontAwesomeIcon icon={faUsers} className="text-green-500" size="sm" />
          <FontAwesomeIcon icon={faUsers} className="text-green-500" size="lg" />
          <FontAwesomeIcon icon={faUsers} className="text-green-500" size="xl" />
          <FontAwesomeIcon icon={faUsers} className="text-green-500" size="2xl" />
        </div>
      </div>

      {/* Brand Icons */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Brand Icons</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <FontAwesomeIcon icon={faGithub} className="text-gray-800 text-2xl hover:text-gray-600 cursor-pointer transition-colors" />
          <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-2xl hover:text-blue-500 cursor-pointer transition-colors" />
          <FontAwesomeIcon icon={faReact} className="text-cyan-500 text-2xl hover:text-cyan-400 cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Animated Icons */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Animated Icons</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <FontAwesomeIcon icon={faRocket} className="text-purple-500 text-2xl" spin />
          <FontAwesomeIcon icon={faCode} className="text-blue-500 text-2xl" pulse />
          <FontAwesomeIcon icon={faGraduationCap} className="text-indigo-500 text-2xl" bounce />
        </div>
      </div>

      {/* Icons with Text */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Icons with Text</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faCode} className="text-blue-500" />
            <span className="text-gray-700">Start coding your project</span>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faTrophy} className="text-yellow-500" />
            <span className="text-gray-700">Win amazing prizes</span>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faUsers} className="text-green-500" />
            <span className="text-gray-700">Team up with friends</span>
          </div>
        </div>
      </div>

      {/* Buttons with Icons */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Buttons with Icons</h3>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <FontAwesomeIcon icon={faCode} />
            Start Coding
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            <FontAwesomeIcon icon={faRocket} />
            Launch Project
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
            <FontAwesomeIcon icon={faTrophy} />
            View Results
          </button>
        </div>
      </div>

      {/* Regular vs Solid Icons */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Regular vs Solid Icons</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="text-center">
            <FontAwesomeIcon icon={faHeart} className="text-red-500 text-2xl block mb-2" />
            <span className="text-sm text-gray-600">Solid Heart</span>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faHeartRegular} className="text-red-500 text-2xl block mb-2" />
            <span className="text-sm text-gray-600">Regular Heart</span>
          </div>
        </div>
      </div>

      {/* Usage Code Examples */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Usage Examples</h3>
        <div className="space-y-2 text-sm font-mono">
          <div className="bg-white p-2 rounded border">
            {`<FontAwesomeIcon icon={faHeart} className="text-red-500" />`}
          </div>
          <div className="bg-white p-2 rounded border">
            {`<FontAwesomeIcon icon={faCode} size="2xl" spin />`}
          </div>
          <div className="bg-white p-2 rounded border">
            {`<FontAwesomeIcon icon={faGithub} className="text-gray-800 hover:text-gray-600" />`}
          </div>
        </div>
      </div>
    </div>
  );
}
