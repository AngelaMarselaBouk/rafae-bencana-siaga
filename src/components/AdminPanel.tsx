
import React, { useState } from 'react';
import { Users, AlertTriangle, FileText, Settings, Bell, MapPin, BarChart3, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useToast } from '../hooks/use-toast';

export const AdminPanel: React.FC = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('dashboard');

  const reportData = [
    { id: 1, location: 'Jalan Utama RT 02', status: 'Belum Ditangani', priority: 'high', time: '5 menit lalu', reporter: 'Ahmad S.' },
    { id: 2, location: 'Sungai Desa', status: 'Sedang Ditangani', priority: 'critical', time: '15 menit lalu', reporter: 'Maria T.' },
    { id: 3, location: 'Area Balai Desa', status: 'Selesai', priority: 'low', time: '1 jam lalu', reporter: 'John D.' }
  ];

  const handleSendAlert = (alertType: string) => {
    toast({
      title: "Peringatan Terkirim",
      description: `Peringatan ${alertType} telah dikirim ke seluruh warga`,
    });
  };

  const handleUpdateReportStatus = (reportId: number, newStatus: string) => {
    toast({
      title: "Status Diperbarui",
      description: `Status laporan #${reportId} diubah menjadi ${newStatus}`,
    });
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="text-blue-600" size={24} />
              <div>
                <p className="text-2xl font-bold text-blue-700">1,247</p>
                <p className="text-sm text-blue-600">Total Pengguna</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <FileText className="text-orange-600" size={24} />
              <div>
                <p className="text-2xl font-bold text-orange-700">23</p>
                <p className="text-sm text-orange-600">Laporan Aktif</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-red-600" size={24} />
              <div>
                <p className="text-2xl font-bold text-red-700">5</p>
                <p className="text-sm text-red-600">Peringatan Aktif</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Shield className="text-green-600" size={24} />
              <div>
                <p className="text-2xl font-bold text-green-700">12</p>
                <p className="text-sm text-green-600">Area Aman</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Alert Controls */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Bell className="text-red-500" size={20} />
            Kontrol Peringatan Darurat
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              onClick={() => handleSendAlert('Siaga 1')}
              className="bg-red-600 hover:bg-red-700 text-white py-6"
            >
              <AlertTriangle className="mr-2" size={20} />
              Siaga 1 - Bahaya
            </Button>
            <Button
              onClick={() => handleSendAlert('Siaga 2')}
              className="bg-orange-600 hover:bg-orange-700 text-white py-6"
            >
              <AlertTriangle className="mr-2" size={20} />
              Siaga 2 - Waspada
            </Button>
            <Button
              onClick={() => handleSendAlert('Siaga 3')}
              className="bg-yellow-600 hover:bg-yellow-700 text-white py-6"
            >
              <AlertTriangle className="mr-2" size={20} />
              Siaga 3 - Hati-hati
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-4">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Manajemen Laporan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reportData.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      report.priority === 'critical' ? 'bg-red-100 text-red-700' :
                      report.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {report.priority === 'critical' ? 'Kritis' :
                       report.priority === 'high' ? 'Tinggi' : 'Rendah'}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      report.status === 'Selesai' ? 'bg-green-100 text-green-700' :
                      report.status === 'Sedang Ditangani' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                  <p className="font-medium">{report.location}</p>
                  <p className="text-sm text-gray-600">{report.time} • {report.reporter}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleUpdateReportStatus(report.id, 'Sedang Ditangani')}
                  >
                    Tangani
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleUpdateReportStatus(report.id, 'Selesai')}
                  >
                    Selesai
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-4">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Pengaturan Sistem</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Notifikasi Push Otomatis</p>
                <p className="text-sm text-gray-600">Kirim notifikasi otomatis berdasarkan level air</p>
              </div>
              <Button variant="outline" size="sm">Aktif</Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Mode Siaga Otomatis</p>
                <p className="text-sm text-gray-600">Aktivasi siaga berdasarkan sensor</p>
              </div>
              <Button variant="outline" size="sm">Nonaktif</Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Backup Data Harian</p>
                <p className="text-sm text-gray-600">Backup otomatis data laporan dan sensor</p>
              </div>
              <Button variant="outline" size="sm">Aktif</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'reports', label: 'Laporan', icon: FileText },
    { id: 'settings', label: 'Pengaturan', icon: Settings }
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Panel Admin</h1>
          <p className="text-gray-600">Pemerintah Desa Rafae</p>
        </div>
        <Button variant="outline" size="sm">
          <Shield size={16} className="mr-1" />
          Admin
        </Button>
      </div>

      {/* Navigation Menu */}
      <div className="flex gap-2 border-b border-gray-200">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors ${
                activeSection === item.id
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              <Icon size={16} />
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      {activeSection === 'dashboard' && renderDashboard()}
      {activeSection === 'reports' && renderReports()}
      {activeSection === 'settings' && renderSettings()}
    </div>
  );
};
