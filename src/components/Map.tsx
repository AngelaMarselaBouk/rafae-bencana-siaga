
import React from 'react';
import { MapPin, Navigation, AlertTriangle, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export const Map: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Peta Evakuasi</h1>
        <Button variant="outline" size="sm">
          <Navigation size={16} className="mr-1" />
          GPS
        </Button>
      </div>

      {/* Map Placeholder */}
      <Card className="shadow-lg">
        <CardContent className="p-0">
          <div className="h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            
            {/* Flood-prone areas */}
            <div className="absolute top-8 left-8 w-16 h-12 bg-red-200 rounded-lg border-2 border-red-400 flex items-center justify-center">
              <AlertTriangle className="text-red-600" size={16} />
            </div>
            
            {/* Safe areas */}
            <div className="absolute top-8 right-8 w-16 h-12 bg-green-200 rounded-lg border-2 border-green-400 flex items-center justify-center">
              <Shield className="text-green-600" size={16} />
            </div>
            
            {/* Current location */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
            
            {/* River */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-blue-300 opacity-60"></div>
            
            <div className="absolute bottom-4 left-4 text-xs text-gray-600 bg-white px-2 py-1 rounded">
              Desa Rafae
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Keterangan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-red-400 rounded border"></div>
              <span className="text-sm">Area Rawan Banjir</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-400 rounded border"></div>
              <span className="text-sm">Titik Kumpul Aman</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></div>
              <span className="text-sm">Lokasi Anda</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-2 bg-blue-300 rounded"></div>
              <span className="text-sm">Sungai/Aliran Air</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Evacuation Points */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Titik Evakuasi Terdekat</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <MapPin className="text-green-600" size={16} />
              <div className="flex-1">
                <p className="text-sm font-medium">Balai Desa Rafae</p>
                <p className="text-xs text-gray-600">200m • 3 menit jalan kaki</p>
              </div>
              <Button size="sm" variant="outline">
                Rute
              </Button>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <MapPin className="text-green-600" size={16} />
              <div className="flex-1">
                <p className="text-sm font-medium">SD Rafae</p>
                <p className="text-xs text-gray-600">350m • 5 menit jalan kaki</p>
              </div>
              <Button size="sm" variant="outline">
                Rute
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
