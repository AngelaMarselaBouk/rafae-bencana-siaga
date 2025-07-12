
// Enhanced notification service for flood alert system
export class NotificationService {
  private static instance: NotificationService;
  
  private constructor() {}
  
  static getInstance(): NotificationService {
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
    
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }
  
  async sendFloodAlert(level: string, location: string = 'Atambua') {
    if (Notification.permission !== 'granted') {
      console.log('Izin notifikasi tidak diberikan');
      return;
    }
    
    const title = `⚠️ PERINGATAN BANJIR ${level.toUpperCase()}`;
    const body = `Status: ${level} di ${location}. Segera ambil tindakan pencegahan.`;
    
    const notification = new Notification(title, {
      body,
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      requireInteraction: true,
      silent: false,
      tag: 'flood-alert'
    });
    
    // Auto close after 10 seconds
    setTimeout(() => {
      notification.close();
    }, 10000);
    
    return notification;
  }
  
  async sendSOSAlert() {
    if (Notification.permission !== 'granted') {
      console.log('Izin notifikasi tidak diberikan');
      return;
    }
    
    const title = '🚨 SINYAL S.O.S DARURAT';
    const body = 'Sinyal darurat telah dikirim ke BPBD Belu dan tim penyelamat.';
    
    const notification = new Notification(title, {
      body,
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      requireInteraction: true,
      silent: false,
      tag: 'sos-alert'
    });
    
    return notification;
  }
}
