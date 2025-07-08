
import React from 'react';
import { ArrowLeft, Info, Phone, MapPin, Clock, AlertTriangle, Navigation, ExternalLink, Shield, Users, Hospital, Home } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const Map: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const evacuationPoints = [
    { name: 'Stadion Atambua', type: 'stadium', coordinates: '-9.1058, 125.0941' },
    { name: 'Gedung Serba Guna', type: 'building', coordinates: '-9.1048, 125.0951' },
    { name: 'Sekolah Tinggi Negeri', type: 'school', coordinates: '-9.1068, 125.0931' },
    { name: 'Puskesmas Atambua', type: 'hospital', coordinates: '-9.1038, 125.0961' }
  ];

  const rescueRoutes = [
    { name: 'Jalur Utama Timur', status: 'aman', color: 'green' },
    { name: 'Jalur Alternatif Barat', status: 'waspada', color: 'yellow' },
    { name: 'Jalur Darurat Selatan', status: 'aman', color: 'green' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-6 text-white max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="sm" className="text-white p-2" onClick={onBack}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-bold">Peta & Rute Evakuasi Atambua</h1>
        </div>

        {/* Google Maps Container */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-lg mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600">
              <MapPin size={20} />
              Lokasi Atambua, Kabupaten Belu
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-80 rounded-lg overflow-hidden shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15860.234567890123!2d125.0941!3d-9.1058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c57bb7c0c7c7c7c%3A0x7c7c7c7c7c7c7c7c!2sAtambua%2C%20Belu%20Regency%2C%20East%20Nusa%20Tenggara!5e0!3m2!1sen!2sid!4v1640995200000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Atambua"
              ></iframe>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
                onClick={() => window.open('https://g.co/kgs/DjrwNv6', '_blank')}
              >
                <ExternalLink size={16} className="mr-2" />
                Buka di Google Maps
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="text-green-600 border-green-600 hover:bg-green-50"
                onClick={() => window.open('https://images.app.goo.gl/jEZpdgbsHfJWRT6y7', '_blank')}
              >
                <MapPin size={16} className="mr-2" />
                Peta Pos Pengamatan
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Evacuation Points */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-lg mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <Shield size={20} />
              Titik Evakuasi Darurat
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {evacuationPoints.map((point, index) => {
              const getIcon = (type: string) => {
                switch (type) {
                  case 'stadium': return <Home className="text-blue-500" size={16} />;
                  case 'building': return <Shield className="text-green-500" size={16} />;
                  case 'school': return <Users className="text-purple-500" size={16} />;
                  case 'hospital': return <Hospital className="text-red-500" size={16} />;
                  default: return <MapPin className="text-gray-500" size={16} />;
                }
              };
              
              return (
                <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    {getIcon(point.type)}
                    <div>
                      <p className="font-medium text-gray-800">{point.name}</p>
                      <p className="text-xs text-gray-600">Koordinat: {point.coordinates}</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-green-600 border-green-600 hover:bg-green-50"
                  >
                    <Navigation size={14} className="mr-1" />
                    Arah
                  </Button>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Rescue Routes */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-lg mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-600">
              <Navigation size={20} />
              Rute Penyelamatan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {rescueRoutes.map((route, index) => {
              const getStatusColor = (status: string) => {
                switch (status) {
                  case 'aman': return 'bg-green-50 text-green-700 border-green-200';
                  case 'waspada': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
                  case 'bahaya': return 'bg-red-50 text-red-700 border-red-200';
                  default: return 'bg-gray-50 text-gray-700 border-gray-200';
                }
              };
              
              return (
                <div key={index} className={`p-3 rounded-lg border ${getStatusColor(route.status)}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        route.color === 'green' ? 'bg-green-500' : 
                        route.color === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                      <div>
                        <p className="font-medium">{route.name}</p>
                        <p className="text-xs opacity-70">Status: {route.status.toUpperCase()}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-orange-600 border-orange-600 hover:bg-orange-50"
                    >
                      <MapPin size={14} className="mr-1" />
                      Lihat
                    </Button>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

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
                  <p className="font-medium text-gray-800">Status Sistem Otomatis</p>
                  <p className="text-sm text-gray-600">Sistem pemantauan banjir terintegrasi dengan pos pengamatan manual</p>
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
