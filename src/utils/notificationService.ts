
export class NotificationService {
  private static instance: NotificationService;

  public static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  async requestPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
      console.log('Browser tidak mendukung notifikasi');
      return false;
    }

    if (Notification.permission === 'granted') {
      return true;
    }

    if (Notification.permission === 'denied') {
      return false;
    }

    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  sendFloodAlert(level: string, height: string, location: string) {
    if (Notification.permission === 'granted') {
      const notification = new Notification('🚨 PERINGATAN BANJIR', {
        body: `${level} - Tinggi air: ${height} di ${location}`,
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        tag: 'flood-alert',
        requireInteraction: true,
        vibrate: [200, 100, 200],
        actions: [
          {
            action: 'view',
            title: 'Lihat Detail'
          },
          {
            action: 'close',
            title: 'Tutup'
          }
        ]
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      // Auto close after 10 seconds
      setTimeout(() => {
        notification.close();
      }, 10000);
    }
  }

  sendWeatherAlert(condition: string, warning: string) {
    if (Notification.permission === 'granted') {
      new Notification('🌧️ PERINGATAN CUACA', {
        body: `${condition}: ${warning}`,
        icon: '/favicon.ico',
        tag: 'weather-alert'
      });
    }
  }

  sendEvacuationAlert(evacuationPoint: string, route: string) {
    if (Notification.permission === 'granted') {
      new Notification('🚨 INSTRUKSI EVAKUASI', {
        body: `Menuju ${evacuationPoint} via ${route}`,
        icon: '/favicon.ico',
        tag: 'evacuation-alert',
        requireInteraction: true
      });
    }
  }
}

export default NotificationService;
