import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

export function SalesGrowth() {
  const data = [
    { stage: 'Start', value: 0, label: 'Zero Marketing' },
    { stage: 'Q1', value: 2, label: 'Networking Begins' },
    { stage: 'Q2', value: 8, label: 'Initial Partnerships' },
    { stage: 'Q3', value: 25, label: 'ALHUB Growth' },
    { stage: 'Q4', value: 50, label: 'IATF Impact' },
    { stage: 'Now', value: 100, label: 'Current Projects' },
  ];

  const achievements = [
    {
      metric: '₹1.4 Cr',
      label: 'Order Closed',
      description: 'Latest deal completed',
    },
    {
      metric: '$1-2M',
      label: 'Ongoing Projects',
      description: 'Current portfolio value',
    },
    {
      metric: '700K+',
      label: 'IATF Revenue',
      description: '3-month impact',
    },
    {
      metric: 'Consistent',
      label: 'ALHUB Response',
      description: 'One-month achievement',
    },
  ];

  return (
    <section id="sales-growth" className="py-20 px-6 bg-[#faf8f3]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="mb-3">Networking strength</h2>
          <p className="text-lg text-[#6b5d50]">From zero marketing to multimillion-dollar deals</p>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-xl p-8 md:p-10 border border-[#d4c7b5] mb-8">
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d4c7b5" />
                <XAxis 
                  dataKey="stage" 
                  stroke="#6b5d50"
                  style={{ fontSize: '14px' }}
                />
                <YAxis 
                  stroke="#6b5d50"
                  style={{ fontSize: '14px' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #d4c7b5',
                    borderRadius: '8px',
                    padding: '12px',
                  }}
                  labelStyle={{ color: '#3d3229', fontWeight: 600 }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8b7355"
                  strokeWidth={3}
                  dot={{ fill: '#c9a96e', r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-[#d4c7b5] text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-[#e8dfd0] flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-4 h-4 text-[#8b7355]" />
              </div>
              <p className="text-xl text-[#2c2419] mb-2">{achievement.metric}</p>
              <h5 className="text-sm mb-1">{achievement.label}</h5>
              <p className="text-xs text-[#6b5d50]">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}