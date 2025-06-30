
import React, { useState } from 'react';
import { ArrowLeft, Bell } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export const WaterLevelStatus: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('SEMUA');

  const tabs = ['SEMUA', 'CILIWUNG', 'KRUKUT', 'SUNTER', 'CIPINANG'];

  const stationData = [
    {
      name: 'PS. Cibogo',
      river: 'Ciliwung',
      level: '46',
      status: 'Normal',
      time: '11:30'
    },
    {
      name: 'PS. Katulampa (Hulu)',
      river: 'Ciliwung',
      level: '55',
      status: 'Normal',
      time: '11:30'
    },
    {
      name: 'PS. Depok',
      river: 'Ciliwung',
      level: '32',
      status: 'Normal',
      time: '11:30'
    },
    {
      name: 'PS. Kp. Melayu',
      river: 'Ciliwung',
      level: '519',
      status: 'Normal',
      time: '11:30'
    },
    {
      name: 'PA. Manggarai',
      river: 'Ciliwung',
      level: '514',
      status: 'Normal',
      time: '11:30'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-4 text-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-white p-2" onClick={onBack}>
              <ArrowLeft size={20} />
            </Button>
            <h1 className="text-lg font-bold">Status Tinggi Muka Air</h1>
          </div>
          <Button variant="ghost" size="sm" className="text-white p-2">
            <Bell size={16} />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-4 bg-white/20 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-colors ${
                activeTab === tab
                  ? 'bg-white text-cyan-600'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Station List */}
        <div className="bg-white rounded-t-3xl -mx-4 px-4 py-6 min-h-96">
          <div className="space-y-3">
            {stationData.map((station, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-sm">{station.name}</h3>
                      <p className="text-xs text-gray-600">{station.river}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-600">{station.status}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">{station.time}</p>
                      <p className="text-2xl font-bold text-gray-800">{station.level}</p>
                      <p className="text-xs text-gray-500">cm ↓</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
