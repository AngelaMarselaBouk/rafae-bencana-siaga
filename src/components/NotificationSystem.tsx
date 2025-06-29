
import React, { useState, useEffect } from 'react';
import { Bell, AlertTriangle, Info, CheckCircle } from 'lucide-react';
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

export const NotificationSystem: React.FC = () => {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'emergency',
      title: 'PERINGATAN DARURAT',
      message: 'Ketinggian air sungai mencapai level bahaya. Segera lakukan evakuasi!',
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      priority: 'critical',
      read: false,
      location: 'Sungai Desa',
      actionRequired: true
    },
    {
      id: '2',
      type: 'warning',
      title: 'Peringatan Cuaca',
      message: 'BMKG memperkirakan hujan lebat dalam 2 jam ke depan',
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      priority: 'high',
      read: false,
      location: 'Desa Rafae'
    },
    {
      id: '3',
      type: 'info',
      title: 'Update Kondisi',
      message: 'Jalan utama RT 02 sudah dapat dilalui kembali',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      priority: 'medium',
      read: true,
      location: 'RT 02'
    }
  ]);

  const [filter, setFilter] = useState<'all' | 'unread' | 'critical'>('all');

  useEffect(() => {
    // Simulate real-time notifications
    const interval = setInterval(() => {
      // Simulate random notification (for demo purposes)
      if (Math.random() > 0.95) {
        const newNotification: Notification = {
          id: Date.now().toString(),
          type: 'info',
          title: 'Update Sistem',
          message: 'Data sensor terbaru telah diterima',
          timestamp: new Date(),
          priority: 'low',
          read: false
        };
        
        setNotifications(prev => [newNotification, ...prev]);
        
        // Show toast for new notification
        toast({
          title: newNotification.title,
          description: newNotification.message,
        });
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [toast]);

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
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bell size={24} className="text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Notifikasi</h1>
            <p className="text-gray-600">{unreadCount} belum dibaca</p>
          </div>
        </div>
        {unreadCount > 0 && (
          <Button onClick={markAllAsRead} variant="outline" size="sm">
            Tandai Semua Terbaca
          </Button>
        )}
      </div>

      {/* Filter Buttons */}
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
          Kritis ({criticalCount})
        </Button>
      </div>

      {/* Critical Alert Banner */}
      {criticalCount > 0 && (
        <Card className="border-red-300 bg-red-50 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-red-600 animate-pulse" size={24} />
              <div>
                <p className="font-bold text-red-800">
                  {criticalCount} Peringatan Kritis Aktif
                </p>
                <p className="text-sm text-red-700">
                  Tindakan segera diperlukan!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <Card className="shadow-md">
            <CardContent className="p-8 text-center text-gray-500">
              <Bell size={48} className="mx-auto mb-4 opacity-50" />
              <p>Tidak ada notifikasi</p>
            </CardContent>
          </Card>
        ) : (
          filteredNotifications.map((notification) => (
            <Card
              key={notification.id}
              className={`shadow-md cursor-pointer transition-all ${
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
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};
