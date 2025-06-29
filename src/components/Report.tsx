
import React, { useState } from 'react';
import { Camera, MapPin, Send, Upload } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

export const Report: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    photo: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Laporan Terkirim",
      description: "Terima kasih! Laporan Anda telah dikirim ke pemerintah desa.",
    });
    setFormData({ location: '', description: '', photo: null });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, photo: file });
    }
  };

  return (
    <div className="p-4 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Laporan Lapangan</h1>
        <p className="text-gray-600">Laporkan kondisi banjir di sekitar Anda</p>
      </div>

      {/* Report Form */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">{t('submitReport')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('location')}
              </label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Contoh: Jalan Utama RT 02, Desa Rafae"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="pl-10"
                />
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('description')}
              </label>
              <Textarea
                placeholder="Jelaskan kondisi banjir: ketinggian air, kerusakan, dll..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('photo')} (Opsional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <label htmlFor="photo-upload" className="cursor-pointer">
                  <Camera className="mx-auto text-gray-400 mb-2" size={32} />
                  <p className="text-sm text-gray-600">
                    {formData.photo ? formData.photo.name : 'Ketuk untuk ambil foto'}
                  </p>
                </label>
              </div>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg">
              <Send className="mr-2" size={20} />
              Kirim Laporan
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Quick Report Buttons */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Laporan Cepat</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="h-20 flex flex-col gap-2 text-yellow-600 border-yellow-300 hover:bg-yellow-50"
              onClick={() => toast({ title: "Laporan Terkirim", description: "Jalan tergenang dilaporkan" })}
            >
              <div className="text-2xl">🚧</div>
              <span className="text-xs">Jalan Tergenang</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col gap-2 text-orange-600 border-orange-300 hover:bg-orange-50"
              onClick={() => toast({ title: "Laporan Terkirim", description: "Sungai meluap dilaporkan" })}
            >
              <div className="text-2xl">🌊</div>
              <span className="text-xs">Sungai Meluap</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col gap-2 text-red-600 border-red-300 hover:bg-red-50"
              onClick={() => toast({ title: "Laporan Terkirim", description: "Rumah terendam dilaporkan" })}
            >
              <div className="text-2xl">🏠</div>
              <span className="text-xs">Rumah Terendam</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col gap-2 text-blue-600 border-blue-300 hover:bg-blue-50"
              onClick={() => toast({ title: "Laporan Terkirim", description: "Kondisi aman dilaporkan" })}
            >
              <div className="text-2xl">✅</div>
              <span className="text-xs">Kondisi Aman</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Laporan Terbaru</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="text-lg">🚧</div>
              <div className="flex-1">
                <p className="text-sm font-medium">Jalan Utama Tergenang 30cm</p>
                <p className="text-xs text-gray-600">RT 02 • 5 menit lalu • Anda</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-lg">🌊</div>
              <div className="flex-1">
                <p className="text-sm font-medium">Sungai Mulai Meluap</p>
                <p className="text-xs text-gray-600">RT 01 • 15 menit lalu • Ahmad S.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="text-lg">✅</div>
              <div className="flex-1">
                <p className="text-sm font-medium">Area Balai Desa Aman</p>
                <p className="text-xs text-gray-600">Tengah Desa • 20 menit lalu • Maria T.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
