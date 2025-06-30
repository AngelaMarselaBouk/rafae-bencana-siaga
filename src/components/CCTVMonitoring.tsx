
import React from 'react';
import { ArrowLeft, Camera, Video, Play } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export const CCTVMonitoring: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-4 text-white">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="sm" className="text-white p-2" onClick={onBack}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg font-bold">P.A. Marina Ancol</h1>
        </div>

        {/* CCTV Feed */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-0">
            <div className="relative h-64 bg-gray-800 rounded-lg overflow-hidden">
              {/* Simulated CCTV Feed */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <Video className="text-white/50 mx-auto mb-2" size={48} />
                  <p className="text-white/70 text-sm">Live CCTV Feed</p>
                  <p className="text-white/50 text-xs">Marina Ancol Station</p>
                </div>
              </div>
              
              {/* CCTV Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div className="flex gap-2">
                  <Button size="sm" className="bg-white/20 text-white hover:bg-white/30">
                    <Play size={14} />
                  </Button>
                  <Button size="sm" className="bg-white/20 text-white hover:bg-white/30">
                    <Camera size={14} />
                  </Button>
                </div>
                <div className="text-white/70 text-xs">
                  LIVE
                </div>
              </div>
              
              {/* Timestamp */}
              <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
                2024-01-15 15:42:33
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Controls */}
        <div className="flex justify-center gap-2 mb-6">
          <Button size="sm" variant="outline" className="text-xs bg-white/10 border-white/20 text-white hover:bg-white/20">
            GRAFIK
          </Button>
          <Button size="sm" variant="outline" className="text-xs bg-white/10 border-white/20 text-white hover:bg-white/20">
            PETA
          </Button>
          <Button size="sm" className="bg-cyan-500 text-white text-xs">
            CCTV
          </Button>
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
