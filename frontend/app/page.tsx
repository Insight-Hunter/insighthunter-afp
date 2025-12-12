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
export default function Home() {
  return (
    <section className="section-card">
      <h1>Welcome to InsightHunter</h1>
      <p>Your enterprise financial nervous system.</p>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <a href="/company">Company Dashboard</a>
        <a href="/admin">Admin Dashboard</a>
      </div>
    </section>
  );
}

