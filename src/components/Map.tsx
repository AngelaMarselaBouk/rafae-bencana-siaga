
import React, { useState } from 'react';
import { MapPin, Navigation, AlertTriangle, Shield, ArrowLeft, BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export const Map: React.FC = () => {
  const { t } = useLanguage();
  const [selectedStation, setSelectedStation] = useState<string | null>(null);

  const stations = [
    { id: '1', name: 'PS. Cilangap', status: 'normal', level: '46°C', x: 20, y: 30 },
    { id: '2', name: 'PS. Katulampa', status: 'normal', level: '55°C', x: 40, y: 25 },
    { id: '3', name: 'PS. Depok', status: 'normal', level: '32°C', x: 35, y: 45 },
    { id: '4', name: 'PS. Kp. Melayu', status: 'siaga', level: '519°C', x: 60, y: 40 },
    { id: '5', name: 'Angke Hulu', status: 'awas', level: '216°C', x: 25, y: 60 },
    { id: '6', name: 'Kali Duri', status: 'siaga', level: '212°C', x: 70, y: 35 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-green-500';
      case 'siaga': return 'bg-yellow-500';
      case 'awas': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      {/* Header */}
      <div className="p-4 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-white p-2">
              <ArrowLeft size={20} />
            </Button>
            <h1 className="text-lg font-bold">Peta Lokasi Stasiun AWLR</h1>
          </div>
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            <Navigation size={16} className="mr-1" />
            GPS
          </Button>
        </div>

        {/* Map Container */}
        <Card className="shadow-lg mb-4">
          <CardContent className="p-0">
            <div className="h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg relative overflow-hidden">
              {/* Background map pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-teal-200"></div>
                {/* River lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <path d="M0,200 Q100,180 200,200 T400,200" stroke="#3B82F6" strokeWidth="3" fill="none" opacity="0.6" />
                  <path d="M150,0 Q170,100 150,200 T150,400" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.6" />
                </svg>
              </div>

              {/* Station markers */}
              {stations.map((station) => (
                <div
                  key={station.id}
                  className={`absolute w-6 h-6 rounded-full border-2 border-white shadow-lg cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${getStatusColor(station.status)}`}
                  style={{ left: `${station.x}%`, top: `${station.y}%` }}
                  onClick={() => setSelectedStation(station.id)}
                >
                  <div className="w-full h-full rounded-full animate-ping opacity-75"></div>
                </div>
              ))}

              {/* Location labels */}
              <div className="absolute bottom-4 left-4 text-xs text-gray-700 bg-white/80 px-2 py-1 rounded">
                Jakarta Selatan
              </div>
              <div className="absolute top-4 right-4 text-xs text-gray-700 bg-white/80 px-2 py-1 rounded">
                Bogor
              </div>
              <div className="absolute top-1/2 left-8 text-xs text-gray-700 bg-white/80 px-2 py-1 rounded">
                Tangerang
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Station List */}
        <Card className="shadow-lg mb-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-800">Status Stasiun AWLR</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              {stations.map((station) => (
                <div
                  key={station.id}
                  className={`flex items-center justify-between p-2 rounded-lg border ${
                    selectedStation === station.id ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(station.status)}`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{station.name}</p>
                      <p className="text-xs text-gray-600 capitalize">{station.status}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-800">{station.level}</p>
                    <Button size="sm" variant="outline" className="mt-1 h-6 px-2 text-xs">
                      <BarChart3 size={12} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Legend */}
        <Card className="shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-800">Keterangan</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Normal</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700">Siaga</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Awas</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
