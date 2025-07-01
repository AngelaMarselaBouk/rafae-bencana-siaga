
import React from 'react';
import { ArrowLeft, Info, Phone, MapPin, Clock, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const Map: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-6 text-white max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="sm" className="text-white p-2" onClick={onBack}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-bold">Informasi Wilayah Atambua</h1>
        </div>

        {/* Info Cards */}
        <div className="space-y-4">
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Info size={20} />
                Informasi Wilayah
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1" size={16} />
                <div>
                  <p className="font-medium text-gray-800">Lokasi</p>
                  <p className="text-sm text-gray-600">Atambua, Kabupaten Belu, Nusa Tenggara Timur</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-orange-500 mt-1" size={16} />
                <div>
                  <p className="font-medium text-gray-800">Status Stasiun AWLR</p>
                  <p className="text-sm text-gray-600">Saat ini belum tersedia stasiun AWLR di wilayah Atambua</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <Phone size={20} />
                Kontak Darurat
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <p className="font-bold text-red-600 text-lg">112</p>
                  <p className="text-xs text-red-700">Darurat Nasional</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="font-bold text-blue-600 text-lg">117</p>
                  <p className="text-xs text-blue-700">SAR Nasional</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm text-gray-700">BPBD Kabupaten Belu</span>
                  <span className="text-sm font-medium text-blue-600">(0389) 21234</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm text-gray-700">Polres Belu</span>
                  <span className="text-sm font-medium text-blue-600">(0389) 21110</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm text-gray-700">PMI Kabupaten Belu</span>
                  <span className="text-sm font-medium text-blue-600">(0389) 21500</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-600">
                <Clock size={20} />
                Jam Operasional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Pusat Informasi</span>
                  <span className="text-sm font-medium">24 Jam</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">BPBD Kabupaten</span>
                  <span className="text-sm font-medium">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Pos Keamanan</span>
                  <span className="text-sm font-medium">24 Jam</span>
                </div>
              </div>
            </CardContent>
          </Card>
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
