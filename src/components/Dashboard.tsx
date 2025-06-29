
import React, { useState } from 'react';
import { AlertTriangle, Cloud, Droplets, Languages, Bell, MapPin, FileText, Shield, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const Dashboard: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      {/* Header */}
      <div className="p-6 text-white">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Droplets className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold">Sistem Peringatan Dini Banjir</h1>
              <p className="text-white/80 text-sm">Desa Rafae, Kec. Raimanuk, Kab. Belu, NTT</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'id' ? 'tet' : 'id')}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Languages size={16} />
              {language === 'id' ? 'ID' : 'TET'}
            </Button>
          </div>
        </div>

        {/* Main Feature Cards Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Monitor Cuaca */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-blue-500" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Monitor Cuaca</h3>
              <p className="text-gray-600 text-sm">Pantau kondisi real-time</p>
            </CardContent>
          </Card>

          {/* Laporkan Kondisi */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="text-green-500" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Laporkan Kondisi</h3>
              <p className="text-gray-600 text-sm">Kirim laporan lapangan</p>
            </CardContent>
          </Card>

          {/* Peta Evakuasi */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-orange-500" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Peta Evakuasi</h3>
              <p className="text-gray-600 text-sm">Lihat jalur aman</p>
            </CardContent>
          </Card>

          {/* Panel Admin */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Settings className="text-purple-500" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Panel Admin</h3>
              <p className="text-gray-600 text-sm">Kelola sistem</p>
            </CardContent>
          </Card>
        </div>

        {/* Emergency SOS Button */}
        <Card className="bg-red-500 border-red-600 text-white shadow-xl">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">SOS</h2>
              <h3 className="text-xl font-bold mb-2">TOMBOL DARURAT RAFAE</h3>
              <p className="text-red-100 text-sm">Tekan saat kondisi bahaya di Desa Rafae</p>
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-6 border-2 border-white animate-pulse">
              <AlertTriangle size={24} className="mr-2" />
              TEKAN DARURAT
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
