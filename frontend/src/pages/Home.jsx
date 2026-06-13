
function Home (){
  return (
    <div>
       <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">

  {/* NAV */}
  <nav className="fixed top-0 w-full z-50 px-8 py-5 flex items-center justify-between border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
    <span className="text-xl font-black tracking-tighter">LUXE<span className="text-[#c8f542]">.</span></span>
    <div className="hidden md:flex gap-8 text-sm text-white/50">
      <span className="cursor-pointer hover:text-white transition-colors">New In</span>
      <span className="cursor-pointer hover:text-white transition-colors">Women</span>
      <span className="cursor-pointer hover:text-white transition-colors">Men</span>
      <span className="cursor-pointer hover:text-white transition-colors">Sale</span>
    </div>
    <div className="flex items-center gap-4">
      <svg className="w-5 h-5 text-white/60 hover:text-white cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      <div className="relative cursor-pointer">
        <svg className="w-5 h-5 text-white/60 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
        <span className="absolute -top-2 -right-2 bg-[#c8f542] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
      </div>
    </div>
  </nav>

  {/* HERO */}
  <section className="pt-32 pb-20 px-8 md:px-16 flex flex-col md:flex-row items-center gap-12 min-h-screen">
    <div className="flex-1 space-y-8">
      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/60">
        <span className="w-1.5 h-1.5 bg-[#c8f542] rounded-full animate-pulse"></span>
        New Collection — Summer 2026
      </div>
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
        WEAR<br />
        <span className="text-transparent" style={{WebkitTextStroke: '1px rgba(255,255,255,0.3)'}}>YOUR</span><br />
        <span className="text-[#c8f542]">STORY</span>
      </h1>
      <p className="text-white/40 text-lg max-w-md leading-relaxed">
        Curated pieces for the ones who don't follow trends — they set them.
      </p>
      <div className="flex items-center gap-4">
        <button className="bg-[#c8f542] text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform text-sm tracking-wide">
          Shop Now
        </button>
        <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:border-white/50 transition-colors text-sm tracking-wide">
          View Lookbook
        </button>
      </div>
      <div className="flex items-center gap-8 pt-4">
        <div>
          <p className="text-2xl font-black">12K+</p>
          <p className="text-white/30 text-xs mt-1">Happy Customers</p>
        </div>
        <div className="w-px h-8 bg-white/10"></div>
        <div>
          <p className="text-2xl font-black">4.9★</p>
          <p className="text-white/30 text-xs mt-1">Average Rating</p>
        </div>
        <div className="w-px h-8 bg-white/10"></div>
        <div>
          <p className="text-2xl font-black">200+</p>
          <p className="text-white/30 text-xs mt-1">Styles Available</p>
        </div>
      </div>
    </div>

    {/* IMAGE GRID */}
    <div className="flex-1 grid grid-cols-2 gap-3 max-w-md">
      <div className="col-span-2 h-64 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#c8f542]/10 to-transparent"></div>
        <span className="text-white/10 text-6xl font-black">IMG</span>
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white/70">Featured Drop</div>
      </div>
      <div className="h-40 bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-2xl flex items-center justify-center border border-white/5">
        <span className="text-white/10 text-4xl font-black">IMG</span>
      </div>
      <div className="h-40 bg-gradient-to-br from-[#c8f542]/20 to-[#1a1a1a] rounded-2xl flex items-center justify-center border border-white/5 relative">
        <span className="text-white/10 text-4xl font-black">IMG</span>
        <div className="absolute top-3 right-3 bg-[#c8f542] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</div>
      </div>
    </div>
  </section>

  {/* MARQUEE */}
  <div className="border-y border-white/5 py-4 overflow-hidden bg-[#c8f542]/5">
    <div className="flex gap-12 animate-marquee whitespace-nowrap">
      {["Free Shipping Over ₹999", "New Drop Every Friday", "Easy 30-Day Returns", "Sustainable Packaging", "Free Shipping Over ₹999", "New Drop Every Friday", "Easy 30-Day Returns", "Sustainable Packaging"].map((text, i) => (
        <span key={i} className="text-sm text-white/40 flex items-center gap-3">
          <span className="text-[#c8f542]">✦</span> {text}
        </span>
      ))}
    </div>
  </div>

  {/* FEATURED PRODUCTS */}
  <section className="px-8 md:px-16 py-20">
    <div className="flex items-end justify-between mb-12">
      <div>
        <p className="text-white/30 text-sm mb-2 tracking-widest uppercase">Trending Now</p>
        <h2 className="text-4xl font-black tracking-tight">Hot Picks</h2>
      </div>
      <span className="text-[#c8f542] text-sm cursor-pointer hover:underline">View All →</span>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        {name: "Oversized Tee", price: "₹1,299", og: "₹1,999", tag: "35% OFF"},
        {name: "Cargo Pants", price: "₹2,499", og: null, tag: "NEW"},
        {name: "Satin Slip Dress", price: "₹3,199", og: "₹3,999", tag: "HOT"},
        {name: "Leather Jacket", price: "₹5,999", og: null, tag: null},
      ].map((item, i) => (
        <div key={i} className="group cursor-pointer">
          <div className="relative h-56 bg-gradient-to-br from-[#1a1a1a] to-[#222] rounded-xl mb-3 overflow-hidden border border-white/5 flex items-center justify-center">
            <span className="text-white/10 text-4xl font-black">IMG</span>
            {item.tag && (
              <div className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${item.tag === 'NEW' ? 'bg-[#c8f542] text-black' : 'bg-white text-black'}`}>
                {item.tag}
              </div>
            )}
            <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 whitespace-nowrap">
              Quick Add
            </button>
          </div>
          <p className="text-sm font-medium">{item.name}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[#c8f542] font-bold text-sm">{item.price}</span>
            {item.og && <span className="text-white/30 text-xs line-through">{item.og}</span>}
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* BANNER */}
  <section className="mx-8 md:mx-16 mb-20 rounded-2xl bg-[#c8f542] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
    <div>
      <p className="text-black/50 text-sm font-medium mb-2 uppercase tracking-widest">Limited Time</p>
      <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-tight">
        Get 20% Off<br />Your First Order
      </h2>
    </div>
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2 bg-black rounded-full overflow-hidden pl-4">
        <input placeholder="Enter your email" className="bg-transparent text-white text-sm outline-none w-48 placeholder:text-white/30" />
        <button className="bg-white text-black font-bold px-6 py-3 text-sm m-1 rounded-full">
          Claim
        </button>
      </div>
      <p className="text-black/40 text-xs">No spam. Unsubscribe anytime.</p>
    </div>
  </section>

</div>
    </div>
  )
}

export default Home
