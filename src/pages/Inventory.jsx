import { useState } from 'react';
import { FiClipboard, FiPackage, FiAlertTriangle, FiPlus, FiMinus } from 'react-icons/fi';

const INITIAL_INVENTORY = [
  { id: "INV-001", name: "CCTV",      category: "CCTV",    unit: "pcs", stock: 14, low: 5,  price: 2800  },
  { id: "INV-002", name: "Mobile Phone Monitoring",    category: "CCTV",    unit: "pcs", stock: 10, low: 5,  price: 1500  },
  { id: "INV-003", name: "Motion Sensors",             category: "Sensors",    unit: "pcs", stock: 8,  low: 3,  price: 1000  },
  { id: "INV-004", name: "Alarm System",             category: "Alarm",    unit: "pcs", stock: 4,  low: 3,  price: 799  },
  { id: "INV-005", name: "Door/Window Sensors",         category: "Alarm",   unit: "pcs", stock: 6,  low: 5,  price: 649   },
  { id: "INV-006", name: "Video Doorbell",        category: "Intercom",   unit: "pcs", stock: 15, low: 4,  price: 4000   },
];

const CATEGORIES = ["All", "CCTV", "Alarm", "Sensors", "Intercom"];

const Inventory = () => {
  const [inventory, setInventory] = useState(INITIAL_INVENTORY);
  const [activeCategory, setActiveCategory] = useState("All");
  const [inventorySearch, setInventorySearch] = useState("");

  const updateStock = (id, delta) => {
    setInventory(prev =>
      prev.map(item =>
        item.id === id ? { ...item, stock: Math.max(0, item.stock + delta) } : item
      )
    );
  };

  const filteredInventory = inventory.filter(item => {
    const matchCat = activeCategory === "All" || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(inventorySearch.toLowerCase()) ||
                        item.category.toLowerCase().includes(inventorySearch.toLowerCase());
    return matchCat && matchSearch;
  });

  const lowStockCount = inventory.filter(i => i.stock <= i.low).length;
  const totalItems    = inventory.reduce((sum, i) => sum + i.stock, 0);
  const totalValue    = inventory.reduce((sum, i) => sum + i.stock * i.price, 0);
  
  return (
    <div id="inventory" className="mb-10">
      {/* Section heading */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs text-[#DFFF00] font-mono tracking-widest uppercase mb-1">Stock Management</p>
          <h3 className="text-2xl font-extrabold tracking-tight">Inventory</h3>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#DFFF00] hover:bg-[#cbe600] text-black text-xs font-bold rounded-lg transition-all">
          <FiPlus /> Add Product
        </button>
      </div>

      {/* Inventory stat mini-cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#121212]/40 border border-neutral-800/60 rounded-xl p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#DFFF00]/10 flex items-center justify-center text-[#DFFF00]">
            <FiPackage />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">Total Stock</p>
            <p className="text-2xl font-black font-mono">{totalItems.toLocaleString()}</p>
          </div>
        </div>
        <div className="bg-[#121212]/40 border border-neutral-800/60 rounded-xl p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            <FiClipboard />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">Stock Value</p>
            <p className="text-2xl font-black font-mono">₱{totalValue.toLocaleString()}</p>
          </div>
        </div>
        <div className={`bg-[#121212]/40 border rounded-xl p-5 flex items-center gap-4 transition-all ${
          lowStockCount > 0 ? 'border-amber-500/40' : 'border-neutral-800/60'
        }`}>
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            lowStockCount > 0 ? 'bg-amber-500/10 text-amber-400' : 'bg-neutral-800 text-neutral-500'
          }`}>
            <FiAlertTriangle />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">Low Stock Alerts</p>
            <p className={`text-2xl font-black font-mono ${lowStockCount > 0 ? 'text-amber-400' : 'text-white'}`}>
              {lowStockCount}
            </p>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <input
          type="text"
          placeholder="Search product..."
          value={inventorySearch}
          onChange={e => setInventorySearch(e.target.value)}
          className="flex-1 bg-[#121212]/60 border border-neutral-800/60 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#DFFF00]/40 transition-all font-mono"
        />
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-2 rounded-lg text-xs font-mono border cursor-pointer transition-all ${
                activeCategory === cat
                  ? 'bg-[#DFFF00] text-black border-[#DFFF00] font-bold'
                  : 'bg-transparent border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-[#121212]/40 border border-neutral-800/60 rounded-2xl overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800/40 bg-neutral-900/30 text-neutral-400 text-xs font-mono uppercase tracking-wider">
                <th className="p-4 pl-6">Product</th>
                <th className="p-4">Category</th>
                <th className="p-4">Unit</th>
                <th className="p-4">Stock Level</th>
                <th className="p-4">Unit Price</th>
                <th className="p-4 pr-6 text-right">Adjust</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/30 text-sm">
              {filteredInventory.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-10 text-center text-neutral-600 font-mono text-xs">
                    No products found.
                  </td>
                </tr>
              ) : filteredInventory.map(item => {
                const isLow = item.stock <= item.low;
                const pct   = Math.min(100, Math.round((item.stock / (item.low * 4)) * 100));
                return (
                  <tr key={item.id} className="hover:bg-neutral-900/20 transition-colors group">
                    {/* Product */}
                    <td className="p-4 pl-6">
                      <div className="font-semibold text-white group-hover:text-[#DFFF00] transition-colors">{item.name}</div>
                      <div className="text-[10px] text-neutral-600 font-mono mt-0.5">{item.id}</div>
                    </td>
                    {/* Category */}
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono border bg-neutral-900 border-neutral-800 text-neutral-400">
                        {item.category}
                      </span>
                    </td>
                    {/* Unit */}
                    <td className="p-4 text-neutral-500 font-mono text-xs">{item.unit}</td>
                    {/* Stock Level */}
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <span className={`text-base font-black font-mono w-8 ${isLow ? 'text-amber-400' : 'text-white'}`}>
                          {item.stock}
                        </span>
                        <div className="flex-1 min-w-16">
                          <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all ${isLow ? 'bg-amber-400' : 'bg-[#DFFF00]'}`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                        {isLow && (
                          <span className="flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                            <FiAlertTriangle className="text-[9px]" /> Low
                          </span>
                        )}
                      </div>
                    </td>
                    {/* Price */}
                    <td className="p-4 font-mono text-sm text-neutral-300">
                      ₱{item.price.toLocaleString()}
                    </td>
                    {/* Adjust */}
                    <td className="p-4 pr-6 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => updateStock(item.id, -1)}
                          disabled={item.stock === 0}
                          className="w-7 h-7 flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-md text-neutral-400 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                          aria-label={`Decrease stock for ${item.name}`}
                        >
                          <FiMinus className="text-xs" />
                        </button>
                        <button
                          onClick={() => updateStock(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center bg-[#DFFF00]/10 hover:bg-[#DFFF00]/20 border border-[#DFFF00]/30 rounded-md text-[#DFFF00] transition-all cursor-pointer"
                          aria-label={`Increase stock for ${item.name}`}
                        >
                          <FiPlus className="text-xs" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Inventory