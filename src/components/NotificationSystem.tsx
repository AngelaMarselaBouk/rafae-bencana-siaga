
import React, { useState, useEffect } from 'react';
import { Bell, AlertTriangle, Info, CheckCircle, ArrowLeft, Settings, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useToast } from '../hooks/use-toast';

interface Notification {
  id: string;
  type: 'emergency' | 'warning' | 'info' | 'success';
  title: string;
  message: string;
  timestamp: Date;
  priority: 'low' | 'medium' | 'high' | 'critical';
  read: boolean;
  location?: string;
  actionRequired?: boolean;
}

interface NotificationSystemProps {
  onBack?: () => void;
}

export const NotificationSystem: React.FC<NotificationSystemProps> = ({ onBack }) => {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'emergency',
      title: 'PERINGATAN DARURAT BANJIR',
      message: 'Ketinggian air Sungai Benanain mencapai 145cm. Status Siaga 2 aktif. Warga diminta waspada!',
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      priority: 'critical',
      read: false,
      location: 'Stasiun Monitoring Benanain',
      actionRequired: true
    },
    {
      id: '2',
      type: 'warning',
      title: 'Peringatan Cuaca Ekstrem',
      message: 'BMKG memperkirakan hujan lebat dengan intensitas 50-100mm dalam 3 jam ke depan di wilayah Atambua',
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      priority: 'high',
      read: false,
      location: 'Wilayah Atambua'
    },
    {
      id: '3',
      type: 'info',
      title: 'Update Kondisi Jalan',
      message: 'Jalan utama menuju Motaain sudah dapat dilalui kembali. Kondisi lalu lintas normal.',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      priority: 'medium',
      read: true,
      location: 'Jalan Motaain'
    },
    {
      id: '4',
      type: 'success',
      title: 'Sistem Monitoring Aktif',
      message: 'Semua stasiun pemantauan berfungsi normal. Data terbaru berhasil diterima.',
      timestamp: new Date(Date.now() - 45 * 60 * 1000),
      priority: 'low',
      read: true,
      location: 'Sistem Pusat'
    }
  ]);

  const [filter, setFilter] = useState<'all' | 'unread' | 'critical'>('all');
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    // Simulate real-time notifications from monitoring stations
    const interval = setInterval(() => {
      // Simulate random notification updates (for demo purposes)
      if (Math.random() > 0.85) {
        const newNotifications = [
          {
            type: 'info' as const,
            title: 'Update Data Sensor',
            message: 'Data terbaru dari stasiun pemantauan telah diterima dan diproses.',
            priority: 'low' as const
          },
          {
            type: 'warning' as const,
            title: 'Peningkatan Muka Air',
            message: 'Ketinggian air di Sungai Malibaca meningkat 5cm dalam 30 menit terakhir.',
            priority: 'medium' as const,
            location: 'Stasiun Pemantauan Malibaca'
          },
          {
            type: 'info' as const,
            title: 'Status Sistem Normal',
            message: 'Semua sistem monitoring berfungsi dengan baik. Tidak ada gangguan terdeteksi.',
            priority: 'low' as const
          }
        ];
        
        const randomNotif = newNotifications[Math.floor(Math.random() * newNotifications.length)];
        const newNotification: Notification = {
          id: Date.now().toString(),
          type: randomNotif.type,
          title: randomNotif.title,
          message: randomNotif.message,
          timestamp: new Date(),
          priority: randomNotif.priority,
          read: false,
          location: randomNotif.location
        };
        
        setNotifications(prev => [newNotification, ...prev]);
        
        // Show toast for new notification
        toast({
          title: newNotification.title,
          description: newNotification.message,
        });

        // Play notification sound if enabled
        if (soundEnabled && newNotification.priority === 'critical') {
          // In a real app, you would play an actual sound file
          console.log('🔊 Critical notification sound would play here');
        }
      }
    }, 20000); // Check every 20 seconds

    return () => clearInterval(interval);
  }, [toast, soundEnabled]);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'emergency':
        return <AlertTriangle className="text-red-500" size={20} />;
      case 'warning':
        return <AlertTriangle className="text-orange-500" size={20} />;
      case 'success':
        return <CheckCircle className="text-green-500" size={20} />;
      default:
        return <Info className="text-blue-500" size={20} />;
    }
  };

  const getNotificationStyle = (type: string, priority: string) => {
    if (priority === 'critical') {
      return 'border-red-300 bg-red-50 animate-pulse';
    }
    switch (type) {
      case 'emergency':
        return 'border-red-300 bg-red-50';
      case 'warning':
        return 'border-orange-300 bg-orange-50';
      case 'success':
        return 'border-green-300 bg-green-50';
      default:
        return 'border-blue-300 bg-blue-50';
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const filteredNotifications = notifications.filter(notif => {
    switch (filter) {
      case 'unread':
        return !notif.read;
      case 'critical':
        return notif.priority === 'critical' || notif.priority === 'high';
      default:
        return true;
    }
  });

  const unreadCount = notifications.filter(n => !n.read).length;
  const criticalCount = notifications.filter(n => n.priority === 'critical').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-6 text-white max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          {onBack && (
            <Button variant="ghost" size="sm" className="text-white p-2" onClick={onBack}>
              <ArrowLeft size={20} />
            </Button>
          )}
          <div className="flex items-center gap-3 flex-1">
            <Bell size={24} className="text-white" />
            <div>
              <h1 className="text-xl font-bold text-white">Sistem Notifikasi</h1>
              <p className="text-white/80 text-sm">{unreadCount} pesan belum dibaca</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white p-2"
            onClick={() => setSoundEnabled(!soundEnabled)}
          >
            <Settings size={16} />
          </Button>
        </div>

        {/* Control Panel */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-lg mb-4">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <div className="flex gap-2">
                <Button
                  variant={filter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('all')}
                >
                  Semua ({notifications.length})
                </Button>
                <Button
                  variant={filter === 'unread' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('unread')}
                >
                  Belum Dibaca ({unreadCount})
                </Button>
                <Button
                  variant={filter === 'critical' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('critical')}
                  className={criticalCount > 0 ? 'text-red-600' : ''}
                >
                  Penting ({criticalCount})
                </Button>
              </div>
              {unreadCount > 0 && (
                <Button onClick={markAllAsRead} variant="outline" size="sm">
                  Tandai Semua Terbaca
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Critical Alert Banner */}
        {criticalCount > 0 && (
          <Card className="border-red-300 bg-red-50 shadow-lg mb-4">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-red-600 animate-pulse" size={24} />
                <div>
                  <p className="font-bold text-red-800">
                    {criticalCount} Peringatan Kritis Aktif
                  </p>
                  <p className="text-sm text-red-700">
                    Tindakan segera diperlukan untuk situasi darurat!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.length === 0 ? (
            <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8 text-center text-gray-500">
                <Bell size={48} className="mx-auto mb-4 opacity-50" />
                <p>Tidak ada notifikasi untuk filter ini</p>
              </CardContent>
            </Card>
          ) : (
            filteredNotifications.map((notification) => (
              <Card
                key={notification.id}
                className={`bg-white/95 backdrop-blur-sm shadow-lg cursor-pointer transition-all ${
                  getNotificationStyle(notification.type, notification.priority)
                } ${!notification.read ? 'border-l-4' : ''}`}
                onClick={() => !notification.read && markAsRead(notification.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-800">
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        )}
                        {notification.priority === 'critical' && (
                          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full font-medium">
                            KRITIS
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700 mb-2">{notification.message}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{notification.timestamp.toLocaleTimeString('id-ID')}</span>
                        {notification.location && (
                          <span>📍 {notification.location}</span>
                        )}
                      </div>
                      {notification.actionRequired && (
                        <div className="mt-3 flex gap-2">
                          <Button size="sm" className="bg-red-600 hover:bg-red-700">
                            Tindakan Darurat
                          </Button>
                          <Button size="sm" variant="outline">
                            Lihat Detail
                          </Button>
                        </div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteNotification(notification.id);
                      }}
                      className="text-gray-400 hover:text-red-600"
                    >
                      ×
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
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
