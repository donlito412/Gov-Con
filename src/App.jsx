import React, { useState } from 'react';
import { dashboardData } from './data';
import { 
  LayoutDashboard, Search, Database, Globe, Building2, 
  Cpu, Briefcase, Truck, Users, Settings, ExternalLink,
  ChevronRight, BarChart3, ShieldCheck, Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SectionContent = ({ section }) => {
  if (!section) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-6"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
        <p className="text-slate-400">{section.description}</p>
      </div>

      <div className="grid gap-6">
        {/* Render tables or lists based on section type */}
        {section.items && section.items.length > 0 && (
          <div className="glass overflow-hidden">
            <table>
              <thead>
                <tr>
                  {Object.keys(section.items[0]).map(key => (
                    <th key={key} className="capitalize">{key}</th>
                  ))}
                  {section.items[0].url && <th>Action</th>}
                </tr>
              </thead>
              <tbody>
                {section.items.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    {Object.entries(item).map(([key, val]) => (
                      <td key={key}>
                        {key === 'url' ? (
                          <a href={val} target="_blank" className="text-blue-400 hover:underline inline-flex items-center gap-1">
                            Link <ExternalLink size={12} />
                          </a>
                        ) : val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Specialized rendering for Suppliers */}
        {section.id === 'suppliers' && section.categories.map(cat => (
          <div key={cat.name} className="glass p-6 mb-4">
            <h3 className="text-xl font-semibold mb-4 border-b border-white/10 pb-2">{cat.name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cat.suppliers.map(s => (
                <div key={s.name} className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/50 transition-all">
                  <div className="font-bold">{s.name}</div>
                  <div className="text-sm text-slate-400">{s.terms}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Specialized rendering for Business Model */}
        {section.id === 'business-model' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-6">
              <h3 className="text-xl font-semibold mb-6">Execution Workflow</h3>
              <div className="space-y-4">
                {section.workflow.map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold">{i+1}</div>
                    <div className="text-lg">{step}</div>
                    {i < section.workflow.length - 1 && <ChevronRight className="ml-auto text-white/20" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-6 bg-blue-600/10 border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4">Why this works:</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• No inventory required (Dropship/Direct Ship)</li>
                <li>• No manufacturing overhead</li>
                <li>• Highly scalable across multiple categories</li>
                <li>• Leverage supplier credit terms to protect cash flow</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

function App() {
  const [activeSectionId, setActiveSectionId] = useState('sled-platforms');
  const activeSection = dashboardData.find(s => s.id === activeSectionId);

  const getIcon = (id) => {
    switch(id) {
      case 'sled-platforms': return <Globe size={18} />;
      case 'pa-sites': return <Building2 size={18} />;
      case 'pgh-sites': return <LayoutDashboard size={18} />;
      case 'current-sled': return <Truck size={18} />;
      case 'real-estate': return <Building2 size={18} />;
      case 'ai-platforms': return <Cpu size={18} />;
      case 'current-ai': return <BarChart3 size={18} />;
      case 'ai-services': return <ShieldCheck size={18} />;
      case 'suppliers': return <Database size={18} />;
      case 'ai-partners': return <Users size={18} />;
      case 'search-terms': return <Search size={18} />;
      case 'target-categories': return <Briefcase size={18} />;
      case 'business-model': return <LayoutDashboard size={18} />;
      default: return <ChevronRight size={18} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#050505]">
      {/* Sidebar */}
      <div className="w-72 glass m-4 mr-2 flex flex-col">
        <div className="p-6 mb-2 border-b border-white/5">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            GOVCON COMMAND
          </h1>
          <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Lito's Hard Drive Portfolio</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
          {dashboardData.map(section => (
            <div 
              key={section.id}
              onClick={() => setActiveSectionId(section.id)}
              className={`sidebar-item ${activeSectionId === section.id ? 'active' : ''}`}
            >
              <span className="mr-3">{getIcon(section.id)}</span>
              <span className="text-sm font-medium truncate">{section.title}</span>
            </div>
          ))}
        </div>

        <div className="p-4 mt-auto border-t border-white/5">
          <div className="bg-white/5 p-3 rounded-lg text-[10px] text-slate-400">
            CAGE CODE READY • CERTS ACTIVE
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 glass m-4 ml-2 overflow-y-auto scrollbar-hide">
        <AnimatePresence mode="wait">
          <SectionContent key={activeSectionId} section={activeSection} />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
