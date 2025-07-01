
import React, { useState } from 'react';
import { ArrowLeft, Bell } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export const WaterLevelStatus: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('SEMUA');

  const tabs = ['SEMUA', 'BENANAIN', 'MALIBACA', 'TAFETO', 'MOTAAIN'];

  const stationData = [
    {
      name: 'Stasiun Atambua Pusat',
      river: 'Sungai Benanain',
      level: '145',
      status: 'Normal',
      time: '11:30'
    },
    {
      name: 'Stasiun Belu Selatan',
      river: 'Sungai Malibaca',
      level: '132',
      status: 'Normal',
      time: '11:30'
    },
    {
      name: 'Stasiun Tasifeto',
      river: 'Sungai Tafeto',
      level: '118',
      status: 'Normal',
      time: '11:30'
    },
    {
      name: 'Stasiun Motaain',
      river: 'Sungai Motaain',
      level: '156',
      status: 'Normal',
      time: '11:30'
    },
    {
      name: 'Stasiun Raihat',
      river: 'Sungai Benanain',
      level: '142',
      status: 'Normal',
      time: '11:30'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-6 text-white max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-white p-2" onClick={onBack}>
              <ArrowLeft size={20} />
            </Button>
            <h1 className="text-xl font-bold">Status Tinggi Muka Air - Atambua</h1>
          </div>
          <Button variant="ghost" size="sm" className="text-white p-2">
            <Bell size={16} />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-white/20 rounded-lg p-1">
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
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
