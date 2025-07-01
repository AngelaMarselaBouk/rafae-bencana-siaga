
import React from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export const Map: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-6 text-white max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="sm" className="text-white p-2" onClick={onBack}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-bold">Peta Lokasi Stasiun AWLR - Atambua</h1>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 bg-gray-200">
            {/* Simulated Map with Markers */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100">
              {/* Simulated markers for Atambua area */}
              <div className="absolute top-16 left-20">
                <MapPin className="text-green-600" size={24} />
                <span className="text-xs text-gray-700 ml-1">Stasiun Atambua Pusat</span>
              </div>
              <div className="absolute top-24 left-32">
                <MapPin className="text-green-600" size={24} />
                <span className="text-xs text-gray-700 ml-1">Stasiun Belu Selatan</span>
              </div>
              <div className="absolute top-32 left-28">
                <MapPin className="text-green-600" size={24} />
                <span className="text-xs text-gray-700 ml-1">Stasiun Tasifeto</span>
              </div>
              <div className="absolute top-40 left-40">
                <MapPin className="text-green-600" size={24} />
                <span className="text-xs text-gray-700 ml-1">Stasiun Motaain</span>
              </div>
              <div className="absolute top-48 left-24">
                <MapPin className="text-green-600" size={24} />
                <span className="text-xs text-gray-700 ml-1">Stasiun Raihat</span>
              </div>
              <div className="absolute top-56 left-36">
                <MapPin className="text-green-600" size={24} />
                <span className="text-xs text-gray-700 ml-1">Stasiun Lamaknen</span>
              </div>
              
              {/* Location Labels */}
              <div className="absolute top-12 left-16 text-sm font-medium text-gray-700">Atambua</div>
              <div className="absolute top-20 right-16 text-sm font-medium text-gray-700">Kabupaten Belu</div>
              <div className="absolute bottom-12 left-16 text-sm font-medium text-gray-700">Nusa Tenggara Timur</div>
              <div className="absolute bottom-20 right-20 text-sm font-medium text-gray-700">Indonesia</div>
            </div>
            
            {/* Google Maps attribution */}
            <div className="absolute bottom-2 left-2 text-xs text-gray-600 bg-white/80 px-2 py-1 rounded">
              Google Maps
            </div>
          </div>
        </div>

        {/* Wave Pattern */}
        <div className="relative h-20 mt-8">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 400 100" preserveAspectRatio="none">
            <path d="M0,50 Q100,20 200,50 T400,50 L400,100 L0,100 Z" fill="rgba(255,255,255,0.1)" />
            <path d="M0,60 Q100,30 200,60 T400,60 L400,100 L0,100 Z" fill="rgba(255,255,255,0.05)" />
          </svg>
        </div>
      </div>
    </div>
  );
};
