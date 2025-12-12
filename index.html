import React, { useState } from ‘react’;
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from ‘recharts’;
import { TrendingUp, DollarSign, AlertTriangle, CheckCircle, Bell, Settings, Users, FileText, Activity, Brain, Zap, Shield, Calendar, CreditCard, Package, Clock, ArrowUpRight, ArrowDownRight, Search, Filter, ChevronRight, Building2, Wallet } from ‘lucide-react’;

const InsightHunterApp = () => {
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
},
{
name: ‘Early Payment’,
trigger: ‘Discount > 1.5% available’,
action: ‘Evaluate and recommend payment’,
active: true,
executions: 67
},
{
name: ‘Dispute Detection’,
trigger: ‘Payment delay pattern detected’,
action: ‘Flag for review and initiate contact’,
active: true,
executions: 12
}
];

const TabContent = () => {
switch(activeTab) {
case ‘dashboard’:
return (
<div className="space-y-6">
{/* Metrics Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
{metrics.map((metric, idx) => (
<div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<div className="p-2 bg-indigo-100 rounded-lg">
<metric.icon className=“w-6 h-6 text-indigo-600” />
</div>
<span className={`text-sm font-semibold ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
{metric.change}
</span>
</div>
<div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
<div className="text-sm text-gray-500">{metric.label}</div>
</div>
))}
</div>

```
        {/* AI Insights */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-6 h-6" />
            <h2 className="text-xl font-bold">AI-Powered Insights</h2>
            <div className="ml-auto flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Real-time Analysis</span>
            </div>
          </div>
          
          <div className="space-y-3">
            {aiInsights.map((insight, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${
                    insight.type === 'critical' ? 'bg-red-500/20' :
                    insight.type === 'opportunity' ? 'bg-yellow-500/20' :
                    'bg-green-500/20'
                  }`}>
                    <insight.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{insight.title}</h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">
                        {insight.confidence}% confidence
                      </span>
                    </div>
                    <p className="text-sm text-white/80 mb-3">{insight.description}</p>
                    <button className="text-sm bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors">
                      {insight.action}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Cash Flow Forecast</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cashFlowData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Line type="monotone" dataKey="inflow" stroke="#10b981" strokeWidth={2} name="Inflow" />
                <Line type="monotone" dataKey="outflow" stroke="#ef4444" strokeWidth={2} name="Outflow" />
                <Line type="monotone" dataKey="predicted" stroke="#6366f1" strokeWidth={2} strokeDasharray="5 5" name="AI Predicted" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">A/R Aging Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={arAgingData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="amount"
                >
                  {arAgingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );

  case 'autonomous':
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Autonomous Operations</h2>
              <p className="text-gray-500 mt-1">AI-powered financial automation in action</p>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-600">System Active</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <div className="text-2xl font-bold text-indigo-600 mb-1">248</div>
              <div className="text-sm text-gray-600">Actions Today</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-600 mb-1">$1.2M</div>
              <div className="text-sm text-gray-600">Value Processed</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-2xl font-bold text-purple-600 mb-1">99.4%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 mb-3">Recent Autonomous Actions</h3>
            {autonomousActions.map((action, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className={`p-2 rounded-full ${
                  action.status === 'completed' ? 'bg-green-100' : 'bg-yellow-100'
                }`}>
                  {action.status === 'completed' ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <Activity className="w-5 h-5 text-yellow-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900">{action.action}</p>
                    <span className="text-sm text-gray-500">{action.time}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded mt-1 inline-block ${
                    action.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {action.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Automations */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Active Workflow Automations</h3>
          <div className="space-y-3">
            {workflowAutomations.map((workflow, idx) => (
              <div key={idx} className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-gray-900">{workflow.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${
                        workflow.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {workflow.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      <span className="font-medium">Trigger:</span> {workflow.trigger}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Action:</span> {workflow.action}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-indigo-600">{workflow.executions}</div>
                    <div className="text-xs text-gray-500">executions</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-4">AI Learning & Optimization</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold mb-2">15,847</div>
              <div className="text-sm">Patterns Analyzed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold mb-2">23%</div>
              <div className="text-sm">Efficiency Gain This Month</div>
            </div>
          </div>
        </div>
      </div>
    );

  case 'payments':
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Payment Scheduling</h2>
              <p className="text-gray-500 mt-1">AI-optimized payment calendar</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Optimize Schedule
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-600">Due This Week</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">$135,800</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-600">Potential Savings</span>
              </div>
              <div className="text-2xl font-bold text-green-600">$4,040</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Wallet className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-600">Scheduled</span>
              </div>
              <div className="text-2xl font-bold text-purple-600">$242,800</div>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search vendors..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>

          <div className="space-y-3">
            {scheduledPayments.map((payment) => (
              <div key={payment.id} className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`p-3 rounded-lg ${
                      payment.priority === 'high' ? 'bg-red-100' :
                      payment.priority === 'medium' ? 'bg-yellow-100' :
                      'bg-gray-100'
                    }`}>
                      <Building2 className={`w-5 h-5 ${
                        payment.priority === 'high' ? 'text-red-600' :
                        payment.priority === 'medium' ? 'text-yellow-600' :
                        'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-semibold text-gray-900">{payment.vendor}</h4>
                        <span className={`text-xs px-2 py-1 rounded ${
                          payment.status === 'scheduled' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {payment.status}
                        </span>
                        {payment.discount > 0 && (
                          <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
                            ${payment.discount.toLocaleString()} discount available
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          ${payment.amount.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Due {payment.dueDate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

  case 'vendors':
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Vendor Management</h2>
              <p className="text-gray-500 mt-1">AI-powered relationship insights</p>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Add Vendor
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <div className="text-2xl font-bold text-indigo-600 mb-1">47</div>
              <div className="text-sm text-gray-600">Active Vendors</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-600 mb-1">$1.7M</div>
              <div className="text-sm text-gray-600">Total Annual Spend</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-600 mb-1">96%</div>
              <div className="text-sm text-gray-600">On-Time Payment Rate</div>
            </div>
          </div>

          <div className="space-y-3">
            {vendors.map((vendor) => (
              <div 
                key={vendor.id} 
                className="p-5 border border-gray-200 rounded-lg hover:border-indigo-300 transition-all cursor-pointer"
                onClick={() => setSelectedVendor(vendor.id === selectedVendor ? null : vendor.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="p-3 bg-indigo-100 rounded-lg">
                      <Building2 className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{vendor.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${
                          vendor.relationship === 'excellent' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {vendor.relationship}
                        </span>
                        {vendor.discountAvailable && (
                          <span className="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-700">
                            Discount Available
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500 text-xs mb-1">Annual Spend</div>
                          <div className="font-semibold text-gray-900">${(vendor.totalSpend / 1000).toFixed(0)}K</div>
                        </div>
                        <div>
                          <div className="text-gray-500 text-xs mb-1">Payment Terms</div>
                          <div className="font-semibold text-gray-900">{vendor.paymentTerms}</div>
                        </div>
                        <div>
                          <div className="text-gray-500 text-xs mb-1">On-Time Rate</div>
                          <div className="font-semibold text-gray-900">{vendor.onTimePayment}%</div>
                        </div>
                        <div>
                          <div className="text-gray-500 text-xs mb-1">Avg Invoice</div>
                          <div className="font-semibold text-gray-900">${(vendor.avgInvoice / 1000).toFixed(0)}K</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${selectedVendor === vendor.id ? 'rotate-90' : ''}`} />
                </div>
                
                {selectedVendor === vendor.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm font-medium text-gray-700 mb-2">Payment History</div>
                        <div className="text-xs text-gray-600">Last 12 months: 24 payments</div>
                        <div className="text-xs text-gray-600">Average delay: 2.3 days</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm font-medium text-gray-700 mb-2">AI Insights</div>
                        <div className="text-xs text-gray-600">Consistently reliable vendor</div>
                        <div className="text-xs text-gray-600">Recommend maintaining relationship</div>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-3">
                      <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                        Schedule Payment
                      </button>
                      <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        View Full Details
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Vendor Performance Insights */}
        <div className="bg-gradient-to-br from-green-600 to-teal-700 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Vendor Performance Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold mb-1">$28K</div>
              <div className="text-sm">Potential Annual Savings</div>
              <div className="text-xs mt-2 opacity-80">From early payment discounts</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold mb-1">3</div>
              <div className="text-sm">At-Risk Relationships</div>
              <div className="text-xs mt-2 opacity-80">Payment delays detected</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold mb-1">12</div>
              <div className="text-sm">Renegotiation Opportunities</div>
              <div className="text-xs mt-2 opacity-80">Based on payment history</div>
            </div>
          </div>
        </div>
      </div>
    );

  case 'analytics':
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Analytics</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Payment Velocity Trend</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={[
                  { month: 'Jul', days: 42 },
                  { month: 'Aug', days: 40 },
                  { month: 'Sep', days: 38 },
                  { month: 'Oct', days: 36 },
                  { month: 'Nov', days: 35 },
                  { month: 'Dec', days: 33 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Line type="monotone" dataKey="days" stroke="#8b5cf6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Working Capital Optimization</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={[
                  { month: 'Jul', saved: 45 },
                  { month: 'Aug', saved: 52 },
                  { month: 'Sep', saved: 67 },
                  { month: 'Oct', saved: 73 },
                  { month: 'Nov', saved: 81 },
                  { month: 'Dec', saved: 94 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Bar dataKey="saved" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Collection Efficiency</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Days Sales Outstanding</span>
                  <span className="font-semibold text-gray-900">38 days</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '73%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Collection Effectiveness Index</span>
                  <span className="font-semibold text-gray-900">94.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{width: '94%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Bad Debt Ratio</span>
                  <span className="font-semibold text-gray-900">1.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{width: '13%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Optimization</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Early Payment Capture Rate</span>
                  <span className="font-semibold text-gray-900">67%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '67%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Days Payable Outstanding</span>
                  <span className="font-semibold text-gray-900">42 days</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{width: '58%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Payment Accuracy</span>
                  <span className="font-semibold text-gray-900">99.1%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '99%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Impact Report */}
        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6" />
            AI Impact Report - This Quarter
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Time Saved</span>
              </div>
              <div className="text-3xl font-bold">247</div>
              <div className="text-xs opacity-80">hours of manual work</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5" />
                <span className="text-sm">Cost Savings</span>
              </div>
              <div className="text-3xl font-bold">$87K</div>
              <div className="text-xs opacity-80">in operational costs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm">Cash Released</span>
              </div>
              <div className="text-3xl font-bold">$1.2M</div>
              <div className="text-xs opacity-80">working capital improved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5" />
                <span className="text-sm">Decisions Made</span>
              </div>
              <div className="text-3xl font-bold">2,847</div>
              <div className="text-xs opacity-80">autonomous actions</div>
            </div>
          </div>
        </div>
      </div>
    );

  default:
    return null;
}
```

};

return (
<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
{/* Header */}
<header className="bg-white border-b border-gray-200 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="p-2 bg-indigo-600 rounded-lg">
<Brain className="w-6 h-6 text-white" />
</div>
<div>
<h1 className="text-xl font-bold text-gray-900">InsightHunter</h1>
<p className="text-xs text-gray-500">Autonomous Finance Platform</p>
</div>
</div>

```
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
              CF
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default InsightHunterApp;
