import React, { useState, useMemo } from 'react';
import { dashboardData } from './data';
import { 
  Globe, Building2, LayoutDashboard, Truck, Cpu, 
  ShieldCheck, Database, Search, Briefcase, ExternalLink,
  ChevronRight, ArrowRight, Layers, FileText, Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SidebarItem = ({ section, active, onClick }) => {
  const getIcon = (id) => {
    switch(id) {
      case 'sled-platforms': return <Globe size={18} />;
      case 'pa-sites': return <Layers size={18} />;
      case 'pgh-sites': return <Building2 size={18} />;
      case 'current-sled': return <Truck size={18} />;
      case 'construction': return <Briefcase size={18} />;
      case 'real-estate': return <Building2 size={18} />;
      case 'current-ai': return <Cpu size={18} />;
      case 'ai-intel': return <ShieldCheck size={18} />;
      case 'suppliers': return <Database size={18} />;
      case 'search-terms': return <Search size={18} />;
      case 'business-model': return <FileText size={18} />;
      default: return <ChevronRight size={18} />;
    }
  };

  return (
    <div 
      onClick={onClick}
      className={`flex items-center px-4 py-3 mb-1 cursor-pointer rounded-lg transition-all ${
        active 
          ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-500' 
          : 'text-slate-400 hover:bg-white/5 hover:text-slate-100'
      }`}
    >
      <span className="mr-3">{getIcon(section.id)}</span>
      <span className="text-sm font-semibold truncate">{section.title}</span>
    </div>
  );
};

const OpportunityCard = ({ item }) => (
  <div className="glass p-6 glow-hover group">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-blue-400 transition-colors">
          {item.name}
        </h3>
        <div className="flex gap-2">
          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {item.entity}
          </span>
          {item.status && (
            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {item.status}
            </span>
          )}
        </div>
      </div>
      <div className="bg-white/5 p-2 rounded-full text-slate-500">
        <Info size={16} />
      </div>
    </div>
    
    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
      {item.scope}
    </p>
    
    <div className="flex items-center justify-between pt-4 border-t border-white/5">
      <span className="text-xs text-slate-500 italic">Source: {item.source}</span>
      <button className="text-blue-400 hover:text-blue-300 text-sm font-bold flex items-center gap-1 transition-colors">
        View Bid <ArrowRight size={14} />
      </button>
    </div>
  </div>
);

const PlatformTable = ({ items }) => (
  <div className="glass overflow-hidden">
    <table className="w-full">
      <thead className="bg-white/5">
        <tr>
          <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Platform</th>
          <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Purpose</th>
          <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-white/5">
        {items.map((item, idx) => (
          <tr key={idx} className="hover:bg-white/5 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-200">{item.name}</td>
            <td className="px-6 py-4 text-sm text-slate-400">{item.purpose}</td>
            <td className="px-6 py-4 text-right">
              <a href={item.url} target="_blank" className="btn-primary py-1 px-3 text-xs bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white">
                Open Portal <ExternalLink size={12} className="ml-1" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SectionView = ({ section }) => {
  const isPlatform = section.id.includes('platforms') || section.id.includes('sites');
  const isOpportunity = section.id.includes('current') || section.id === 'construction' || section.id === 'real-estate';

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="p-8 max-w-6xl mx-auto"
    >
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold mb-3 tracking-tight">{section.title}</h2>
        <p className="text-lg text-slate-400">{section.description}</p>
      </div>

      <div className="grid gap-8">
        {isPlatform && <PlatformTable items={section.items} />}

        {isOpportunity && (
          <div className="grid md:grid-cols-2 gap-6">
            {section.items.map((item, idx) => (
              <OpportunityCard key={idx} item={item} />
            ))}
          </div>
        )}

        {/* Specialized Views */}
        {section.id === 'suppliers' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item, idx) => (
              <div key={idx} className="glass p-6 border-t-4 border-blue-500">
                <div className="text-xs text-slate-500 uppercase font-bold mb-2">{item.category}</div>
                <div className="text-2xl font-bold mb-4">{item.name}</div>
                <div className="flex items-center gap-2">
                  <span className="badge bg-blue-500/20 text-blue-400">{item.terms}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {section.id === 'business-model' && (
          <div className="glass p-12 bg-blue-600/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-blue-500/10">
              <FileText size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-10">Strategic Broker Workflow</h3>
            <div className="space-y-6 relative z-10">
              {section.workflow.map((step, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    {i+1}
                  </div>
                  <div className="text-xl font-medium text-slate-200">{step}</div>
                  {i < section.workflow.length - 1 && <ChevronRight className="text-slate-600 mx-auto" />}
                </div>
              ))}
            </div>
          </div>
        )}

        {section.id === 'search-terms' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {section.items.map((term, i) => (
              <div key={i} className="glass p-4 text-center font-mono text-sm hover:border-blue-500 cursor-pointer transition-all">
                {term}
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('sled-platforms');
  const activeSection = useMemo(() => dashboardData.find(s => s.id === activeTab), [activeTab]);

  return (
    <div className="flex h-screen bg-[#050505] text-slate-100 overflow-hidden font-body">
      {/* Sidebar */}
      <div className="w-80 border-r border-white/5 flex flex-col bg-[#080808]">
        <div className="p-8 mb-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
              <Layers className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">COMMAND</h1>
              <p className="text-[9px] uppercase tracking-widest text-blue-500 font-extrabold">GovCon Intelligence</p>
            </div>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-transparent rounded-full opacity-50" />
        </div>
        
        <div className="flex-1 overflow-y-auto px-4 pb-8 scrollbar-hide">
          {dashboardData.map(section => (
            <SidebarItem 
              key={section.id} 
              section={section} 
              active={activeTab === section.id}
              onClick={() => setActiveTab(section.id)}
            />
          ))}
        </div>

        <div className="p-6 bg-[#0a0a0a] border-t border-white/5">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">System Active • CAGE: Verified</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto scrollbar-hide relative bg-gradient-to-br from-[#050505] to-[#0a0a0a]">
        <AnimatePresence mode="wait">
          <SectionView key={activeTab} section={activeSection} />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
