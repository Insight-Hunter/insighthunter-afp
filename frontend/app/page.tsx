import React, { useState } from ‘react’;
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from ‘recharts’;
import { TrendingUp, DollarSign, AlertTriangle, CheckCircle, Bell, Settings, Users, FileText, Activity, Brain, Zap, Shield, Calendar, CreditCard, Package, Clock, ArrowUpRight, ArrowDownRight, Search, Filter, ChevronRight, Building2, Wallet } from ‘lucide-react’;

const Page = () => {
const [activeTab, setActiveTab] = useState(‘dashboard’);
const [selectedVendor, setSelectedVendor] = useState(null);
const [paymentFilter, setPaymentFilter] = useState(‘all’);

// Sample data
const cashFlowData = [
{ month: ‘Jan’, inflow: 450000, outflow: 380000, predicted: 470000 },
{ month: ‘Feb’, inflow: 520000, outflow: 420000, predicted: 540000 },
{ month: ‘Mar’, inflow: 480000, outflow: 390000, predicted: 510000 },
{ month: ‘Apr’, inflow: 610000, outflow: 450000, predicted: 630000 },
{ month: ‘May’, inflow: 580000, outflow: 440000, predicted: 600000 },
{ month: ‘Jun’, inflow: 650000, outflow: 480000, predicted: 680000 }
];

const arAgingData = [
{ category: ‘0-30 days’, amount: 245000, color: ‘#10b981’ },
{ category: ‘31-60 days’, amount: 128000, color: ‘#f59e0b’ },
{ category: ‘61-90 days’, amount: 67000, color: ‘#ef4444’ },
{ category: ‘90+ days’, amount: 23000, color: ‘#7f1d1d’ }
];

const aiInsights = [
{
type: ‘critical’,
icon: AlertTriangle,
title: ‘Cash Flow Alert’,
description: ‘Predicted shortfall of $45K in 14 days. AI recommends accelerating collections from 3 key accounts.’,
action: ‘Auto-execute collection workflow’,
confidence: 94
},
{
type: ‘opportunity’,
icon: TrendingUp,
title: ‘Early Payment Opportunity’,
description: ‘5 vendors offer 2% discount for early payment. Net savings: $12,400.’,
action: ‘Schedule optimized payments’,
confidence: 87
},
{
type: ‘success’,
icon: CheckCircle,
title: ‘DSO Improvement’,
description: ‘AI-driven collections reduced DSO by 7 days this quarter. $230K improvement in working capital.’,
action: ‘View detailed report’,
confidence: 99
}
];

const metrics = [
{ label: ‘Cash Position’, value: ‘$2.4M’, change: ‘+12%’, trend: ‘up’, icon: DollarSign },
{ label: ‘DSO’, value: ‘38 days’, change: ‘-7 days’, trend: ‘up’, icon: Activity },
{ label: ‘AI Automation’, value: ‘87%’, change: ‘+15%’, trend: ‘up’, icon: Brain },
{ label: ‘Collection Rate’, value: ‘94.2%’, change: ‘+3.8%’, trend: ‘up’, icon: TrendingUp }
];

const autonomousActions = [
{ time: ‘2 min ago’, action: ‘Sent payment reminders to 12 accounts’, status: ‘completed’, category: ‘collections’ },
{ time: ‘15 min ago’, action: ‘Approved 3 invoices under $5K threshold’, status: ‘completed’, category: ‘approval’ },
{ time: ‘1 hour ago’, action: ‘Escalated dispute to finance team’, status: ‘pending’, category: ‘dispute’ },
{ time: ‘2 hours ago’, action: ‘Optimized payment schedule for 8 vendors’, status: ‘completed’, category: ‘payment’ },
{ time: ‘3 hours ago’, action: ‘Updated cash flow forecast based on new data’, status: ‘completed’, category: ‘forecast’ }
];

const scheduledPayments = [
{ id: 1, vendor: ‘Acme Corp’, amount: 45000, dueDate: ‘2024-12-15’, status: ‘scheduled’, discount: 900, priority: ‘high’ },
{ id: 2, vendor: ‘Global Supplies Inc’, amount: 28500, dueDate: ‘2024-12-18’, status: ‘scheduled’, discount: 0, priority: ‘medium’ },
{ id: 3, vendor: ‘Tech Solutions Ltd’, amount: 62000, dueDate: ‘2024-12-20’, status: ‘pending’, discount: 1240, priority: ‘high’ },
{ id: 4, vendor: ‘Office Essentials’, amount: 12300, dueDate: ‘2024-12-22’, status: ‘scheduled’, discount: 0, priority: ‘low’ },
{ id: 5, vendor: ‘Manufacturing Partners’, amount: 95000, dueDate: ‘2024-12-25’, status: ‘pending’, discount: 1900, priority: ‘high’ }
];

const vendors = [
{
id: 1,
name: ‘Acme Corp’,
totalSpend: 540000,
paymentTerms: ‘Net 30’,
onTimePayment: 98,
avgInvoice: 45000,
relationship: ‘excellent’,
discountAvailable: true
},
{
id: 2,
name: ‘Global Supplies Inc’,
totalSpend: 280000,
paymentTerms: ‘Net 45’,
onTimePayment: 95,
avgInvoice: 28500,
relationship: ‘good’,
discountAvailable: false
},
{
id: 3,
name: ‘Tech Solutions Ltd’,
totalSpend: 720000,
paymentTerms: ‘Net 30’,
onTimePayment: 100,
avgInvoice: 62000,
relationship: ‘excellent’,
discountAvailable: true
},
{
id: 4,
name: ‘Office Essentials’,
totalSpend: 145000,
paymentTerms: ‘Net 60’,
onTimePayment: 92,
avgInvoice: 12300,
relationship: ‘good’,
discountAvailable: false
}
];

const workflowAutomations = [
{
name: ‘Invoice Approval’,
trigger: ‘Invoice received < $5K’,
action: ‘Auto-approve and schedule payment’,
active: true,
executions: 847
},
{
name: ‘Collection Reminder’,
trigger: ‘Invoice overdue 7+ days’,
action: ‘Send escalating reminder sequence’,
active: true,
executions: 234
  </header>

  {/* Navigation */}
  <div className="bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex gap-8">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
            activeTab === 'dashboard'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab('autonomous')}
          className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
            activeTab === 'autonomous'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <Zap className="w-4 h-4" />
          Autonomous Ops
        </button>
        <button
          onClick={() => setActiveTab('payments')}
          className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
            activeTab === 'payments'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <CreditCard className="w-4 h-4" />
          Payment Scheduling
        </button>
        <button
          onClick={() => setActiveTab('vendors')}
          className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
            activeTab === 'vendors'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <Building2 className="w-4 h-4" />
          Vendor Management
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
            activeTab === 'analytics'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Analytics
        </button>
      </nav>
    </div>
  </div>

  {/* Main Content */}
  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <TabContent />
  </main>
</div>
```

);
};

export default Page;
