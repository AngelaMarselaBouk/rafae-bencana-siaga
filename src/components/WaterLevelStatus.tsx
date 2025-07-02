
import React, { useState } from 'react';
import { ArrowLeft, Bell, Thermometer } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export const WaterLevelStatus: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('SEMUA');

  const tabs = ['SEMUA', 'BERDAO', 'TALAU', 'NOEL MINA', 'MOTUMORU', 'MALIBAKA'];

  const stationData = [
    {
      name: 'Pos Pemantauan Atambua Barat',
      river: 'Sungai Berdao',
      level: '145',
      status: 'Normal',
      time: '11:30',
      temp: '28°C'
    },
    {
      name: 'Pos Pemantauan Atambua Selatan',
      river: 'Sungai Talau',
      level: '132',
      status: 'Normal',
      time: '11:30',
      temp: '27°C'
    },
    {
      name: 'Pos Pengawasan Raihat',
      river: 'Sungai Noel Mina',
      level: '118',
      status: 'Normal',
      time: '11:30',
      temp: '26°C'
    },
    {
      name: 'Pos Observasi Raimanuk',
      river: 'Sungai Motumoru',
      level: '156',
      status: 'Normal',
      time: '11:30',
      temp: '29°C'
    },
    {
      name: 'Pos Pemantauan Lamaknen',
      river: 'Sungai Malibaka',
      level: '142',
      status: 'Normal',
      time: '11:30',
      temp: '27°C'
    },
    {
      name: 'Pos Pemantauan Tasifeto Barat',
      river: 'Sungai Baukama',
      level: '138',
      status: 'Normal',
      time: '11:30',
      temp: '26°C'
    },
    {
      name: 'Pos Pengawasan Tasifeto Timur',
      river: 'Sungai Baukoek',
      level: '124',
      status: 'Normal',
      time: '11:30',
      temp: '25°C'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-6 text-white max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-white p-2 hover:bg-white/20" onClick={onBack}>
              <ArrowLeft size={20} />
            </Button>
            <h1 className="text-xl font-bold">Status Tinggi Muka Air - Kabupaten Belu</h1>
          </div>
          <Button variant="ghost" size="sm" className="text-white p-2 hover:bg-white/20">
            <Bell size={16} />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-white/20 rounded-lg p-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 py-2 px-3 text-xs font-medium rounded-md transition-colors ${
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
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stationData.map((station, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow bg-white/90 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-sm mb-1">{station.name}</h3>
                      <p className="text-xs text-gray-600 mb-2">{station.river}</p>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                        <span className="text-xs text-green-600 font-medium">{station.status}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Thermometer size={12} className="text-blue-500" />
                        <span className="text-xs text-blue-600 font-medium">{station.temp}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-1">{station.time}</p>
                      <p className="text-2xl font-bold text-gray-800">{station.level}</p>
                      <p className="text-xs text-gray-500">cm ↓</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <Card className="bg-white/20 backdrop-blur-sm border-white/30 text-white shadow-xl mt-6">
          <CardContent className="p-4">
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Status Keseluruhan</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-green-500/20 rounded-lg p-3">
                  <p className="font-semibold text-green-200 text-lg">7</p>
                  <p className="text-green-100">Pos Normal</p>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-3">
                  <p className="font-semibold text-blue-200 text-lg">26°C</p>
                  <p className="text-blue-100">Suhu Rata-rata</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
