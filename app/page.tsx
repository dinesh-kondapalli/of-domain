export default function Home() {
  return (
    <>
      <section className="hero clean_bg content-section min-h-screen flex items-center justify-center bg-[#f5f2ed]">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-normal text-black tracking-tight leading-none mb-8 font-[family-name:var(--font-playfair)]">
                Open Field
              </h1>
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-black font-[family-name:var(--font-geist-mono)]">
                We turn premium domains<br />into startup assets
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tile content-section bg-[#f5f2ed] pb-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="tile__item bg-[#ebe8e3] aspect-square flex items-center justify-center p-8">
              <p className="tile__item_text text-2xl md:text-3xl lg:text-4xl text-black text-center font-[family-name:var(--font-playfair)] leading-tight">
                Not every land fits<br />every seed
              </p>
            </div>
            
            <div className="tile__item bg-[#ebe8e3] aspect-square flex items-center justify-center p-8">
              <p className="tile__item_text text-2xl md:text-3xl lg:text-4xl text-black text-center font-[family-name:var(--font-playfair)] leading-tight">
                Not every seed grows&nbsp;alone
              </p>
            </div>
            
            <div className="tile__item bg-[#ebe8e3] aspect-square flex items-center justify-center p-8">
              <p className="tile__item_text text-2xl md:text-3xl lg:text-4xl text-black text-center font-[family-name:var(--font-playfair)] leading-tight">
                A domain holds<br />potential
              </p>
            </div>
            
            <div className="tile__item bg-[#ebe8e3] aspect-square flex items-center justify-center p-8">
              <p className="tile__item_text text-2xl md:text-3xl lg:text-4xl text-black text-center font-[family-name:var(--font-playfair)] leading-tight">
                A founder brings<br />intent
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="big_title content-section bg-[#f5f2ed] pb-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="big_title__item bg-[#ebe8e3] py-32 md:py-48 lg:py-64 px-8 flex flex-col items-center justify-center text-center">
            <p className="big_title__item_text text-3xl md:text-4xl lg:text-5xl text-black font-[family-name:var(--font-playfair)] leading-relaxed mb-6">
              Together, they can grow something real
            </p>
            <p className="big_title__item_text text-3xl md:text-4xl lg:text-5xl text-black font-[family-name:var(--font-playfair)] leading-relaxed">
              And we make it happen
            </p>
          </div>
        </div>
      </section>

      <section className="how content-section bg-[#f5f2ed] pb-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#ebe8e3] p-3">
              <p className="corner__title text-3xl md:text-4xl text-black font-[family-name:var(--font-playfair)]">
                How it works
              </p>
            </div>
            <div className="bg-[#ebe8e3] p-3 flex flex-col">
              <div className="how__right_list">
                <p className="right_list_item text-xs uppercase tracking-wider text-black border-b border-black/20 pb-1 mb-1 font-[family-name:var(--font-geist-mono)]">
                  Pick a domain
                </p>
                <p className="right_list_item text-xs uppercase tracking-wider text-black border-b border-black/20 pb-1 mb-1 font-[family-name:var(--font-geist-mono)]">
                  subscribe
                </p>
                <p className="right_list_item text-xs uppercase tracking-wider text-black border-b border-black/20 pb-1 mb-2 font-[family-name:var(--font-geist-mono)]">
                  build
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="how__right_footer_left border-r border-black/20 pr-2">
                  <p className="how__right_footer__title text-xs uppercase tracking-wider text-black mb-0 font-[family-name:var(--font-geist-mono)]">
                    if success
                  </p>
                  <p className="text-[10px] text-black/60 font-[family-name:var(--font-geist-mono)] uppercase tracking-wider">
                    you buyout domain
                  </p>
                  <p className="text-[10px] text-black/60 font-[family-name:var(--font-geist-mono)] uppercase tracking-wider">
                    and own it
                  </p>
                </div>
                <div className="how__right_footer_right pl-2">
                  <p className="how__right_footer__title text-xs uppercase tracking-wider text-black mb-0 font-[family-name:var(--font-geist-mono)]">
                    if failure
                  </p>
                  <p className="text-[10px] text-black/60 font-[family-name:var(--font-geist-mono)] uppercase tracking-wider">
                    domain returns
                  </p>
                  <p className="text-[10px] text-black/60 font-[family-name:var(--font-geist-mono)] uppercase tracking-wider">
                    to platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="big_title content-section bg-[#f5f2ed] pb-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="big_title__item bg-[#ebe8e3] py-32 md:py-48 lg:py-64 px-8 flex flex-col items-center justify-center text-center">
            <p className="big_title__item_text text-3xl md:text-4xl lg:text-5xl text-black font-[family-name:var(--font-playfair)] leading-relaxed">
              No cold emails. No upfront costs. Just a clean<br />contract and a good name to build on
            </p>
          </div>
        </div>
      </section>

      <section className="deal content-section bg-[#f5f2ed] pb-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#ebe8e3] p-4">
              <p className="corner__title text-3xl md:text-4xl text-black font-[family-name:var(--font-playfair)]">
                The deal
              </p>
            </div>
            <div className="bg-[#ebe8e3] p-4 flex flex-col">
              <p className="text-xs uppercase tracking-wider text-black mb-4 font-[family-name:var(--font-geist-mono)]">
                If you're starting something new, raising money, or running a business - but your name isn't right - this is for you. You get the name. You build.
              </p>
              <p className="text-xs uppercase tracking-wider text-black mb-6 font-[family-name:var(--font-geist-mono)]">
                If it's a match, you get the name. You build.
              </p>
              <a href="#" className="button bg-black text-white px-6 py-3 text-xs uppercase tracking-wider inline-block w-fit font-[family-name:var(--font-geist-mono)] mb-8">
                see available domains
              </a>
              <div className="mt-auto">
                <p className="right_list_item text-xs uppercase tracking-wider text-black border-b border-black/20 pb-2 mb-2 font-[family-name:var(--font-geist-mono)]">
                  Clean legal structure
                </p>
                <p className="right_list_item text-xs uppercase tracking-wider text-black border-b border-black/20 pb-2 mb-2 font-[family-name:var(--font-geist-mono)]">
                  Time-bound or milestone-based subscription
                </p>
                <p className="right_list_item text-xs uppercase tracking-wider text-black border-b border-black/20 pb-2 font-[family-name:var(--font-geist-mono)]">
                  No hidden terms
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="big_list" className="big_list content-section bg-[#f5f2ed] pb-4">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Top Tier */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#ebe8e3] p-4">
              <p className="corner__title text-3xl md:text-4xl text-black font-[family-name:var(--font-playfair)]">
                Top Tier
              </p>
            </div>
            <div className="bg-[#ebe8e3] p-4">
              {/* top100.com */}
              <div className="right_big_list_item border-b border-black/20 pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <a href="https://top100.com" target="_blank" className="domain_link text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
                    top100.com
                  </a>
                  <button className="pitch_button text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">
                    APPLY NOW
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">Buyout</span>
                      <a href="mailto:contact@of.domains" className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">contact us</a>
                    </div>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)]">$700.000</span>
                  </div>
                  <div className="border-l border-black/20 pl-4">
                    <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">subscription (first year)</span>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)] block">$7.700/month</span>
                  </div>
                </div>
              </div>

              {/* effect.com */}
              <div className="right_big_list_item border-b border-black/20 pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <a href="https://effect.com" target="_blank" className="domain_link text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
                    effect.com
                  </a>
                  <button className="pitch_button text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">
                    APPLY NOW
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">Buyout</span>
                      <a href="mailto:contact@of.domains" className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">contact us</a>
                    </div>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)]">$700.000</span>
                  </div>
                  <div className="border-l border-black/20 pl-4">
                    <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">subscription (first year)</span>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)] block">$7.700/month</span>
                  </div>
                </div>
              </div>

              {/* medclinic.com */}
              <div className="right_big_list_item border-b border-black/20 pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <a href="https://medclinic.com" target="_blank" className="domain_link text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
                    medclinic.com
                  </a>
                  <button className="pitch_button text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">
                    APPLY NOW
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">Buyout</span>
                      <a href="mailto:contact@of.domains" className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">contact us</a>
                    </div>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)]">$300.000</span>
                  </div>
                  <div className="border-l border-black/20 pl-4">
                    <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">subscription (first year)</span>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)] block">$3.600/month</span>
                  </div>
                </div>
              </div>

              {/* people.net */}
              <div className="right_big_list_item border-b border-black/20 pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <a href="https://people.net" target="_blank" className="domain_link text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
                    people.net
                  </a>
                  <button className="pitch_button text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">
                    APPLY NOW
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">Buyout</span>
                      <a href="mailto:contact@of.domains" className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">contact us</a>
                    </div>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)]">$300.000</span>
                  </div>
                  <div className="border-l border-black/20 pl-4">
                    <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">subscription (first year)</span>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)] block">$3.600/month</span>
                  </div>
                </div>
              </div>

              {/* shows.net */}
              <div className="right_big_list_item border-b border-black/20 pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <a href="https://shows.net" target="_blank" className="domain_link text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
                    shows.net
                  </a>
                  <button className="pitch_button text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">
                    APPLY NOW
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">Buyout</span>
                      <a href="mailto:contact@of.domains" className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">contact us</a>
                    </div>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)]">$100.000</span>
                  </div>
                  <div className="border-l border-black/20 pl-4">
                    <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">subscription (first year)</span>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)] block">$1.300/month</span>
                  </div>
                </div>
              </div>

              {/* account.net */}
              <div className="right_big_list_item">
                <div className="flex justify-between items-center mb-2">
                  <a href="https://account.net" target="_blank" className="domain_link text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
                    account.net
                  </a>
                  <button className="pitch_button text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">
                    APPLY NOW
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">Buyout</span>
                      <a href="mailto:contact@of.domains" className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">contact us</a>
                    </div>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)]">$100.000</span>
                  </div>
                  <div className="border-l border-black/20 pl-4">
                    <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">subscription (first year)</span>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)] block">$1.300/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mid Tier */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#ebe8e3] p-4">
              <p className="corner__title text-3xl md:text-4xl text-black font-[family-name:var(--font-playfair)]">
                Mid Tier
              </p>
            </div>
            <div className="bg-[#ebe8e3] p-4">
              {/* cels.com */}
              <div className="right_big_list_item border-b border-black/20 pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <a href="https://cels.com" target="_blank" className="domain_link text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
                    cels.com
                  </a>
                  <button className="pitch_button text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">
                    APPLY NOW
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">Buyout</span>
                      <a href="mailto:contact@of.domains" className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">contact us</a>
                    </div>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)]">$70.000</span>
                  </div>
                  <div className="border-l border-black/20 pl-4">
                    <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">subscription (first year)</span>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)] block">$950/month</span>
                  </div>
                </div>
              </div>

              {/* beads.org */}
              <div className="right_big_list_item border-b border-black/20 pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <a href="https://beads.org" target="_blank" className="domain_link text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
                    beads.org
                  </a>
                  <button className="pitch_button text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">
                    APPLY NOW
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">Buyout</span>
                      <a href="mailto:contact@of.domains" className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">contact us</a>
                    </div>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)]">$70.000</span>
                  </div>
                  <div className="border-l border-black/20 pl-4">
                    <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">subscription (first year)</span>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)] block">$950/month</span>
                  </div>
                </div>
              </div>

              {/* smug.com */}
              <div className="right_big_list_item border-b border-black/20 pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <a href="https://smug.com" target="_blank" className="domain_link text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
                    smug.com
                  </a>
                  <button className="pitch_button text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">
                    APPLY NOW
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">Buyout</span>
                      <a href="mailto:contact@of.domains" className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">contact us</a>
                    </div>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)]">$50.000</span>
                  </div>
                  <div className="border-l border-black/20 pl-4">
                    <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">subscription (first year)</span>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)] block">$750/month</span>
                  </div>
                </div>
              </div>

              {/* publisher.net */}
              <div className="right_big_list_item">
                <div className="flex justify-between items-center mb-2">
                  <a href="https://publisher.net" target="_blank" className="domain_link text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
                    publisher.net
                  </a>
                  <button className="pitch_button text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">
                    APPLY NOW
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">Buyout</span>
                      <a href="mailto:contact@of.domains" className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">contact us</a>
                    </div>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)]">$40.000</span>
                  </div>
                  <div className="border-l border-black/20 pl-4">
                    <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">subscription (first year)</span>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)] block">$650/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Low Tier */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#ebe8e3] p-4">
              <p className="corner__title text-3xl md:text-4xl text-black font-[family-name:var(--font-playfair)]">
                Low Tier
              </p>
            </div>
            <div className="bg-[#ebe8e3] p-4">
              {/* airways.net */}
              <div className="right_big_list_item border-b border-black/20 pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <a href="https://airways.net" target="_blank" className="domain_link text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
                    airways.net
                  </a>
                  <button className="pitch_button text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">
                    APPLY NOW
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">Buyout</span>
                      <a href="mailto:contact@of.domains" className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">contact us</a>
                    </div>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)]">$30.000</span>
                  </div>
                  <div className="border-l border-black/20 pl-4">
                    <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">subscription (first year)</span>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)] block">$550/month</span>
                  </div>
                </div>
              </div>

              {/* womensports.com */}
              <div className="right_big_list_item border-b border-black/20 pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <a href="https://womensports.com" target="_blank" className="domain_link text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
                    womensports.com
                  </a>
                  <button className="pitch_button text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">
                    APPLY NOW
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">Buyout</span>
                      <a href="mailto:contact@of.domains" className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">contact us</a>
                    </div>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)]">$30.000</span>
                  </div>
                  <div className="border-l border-black/20 pl-4">
                    <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">subscription (first year)</span>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)] block">$550/month</span>
                  </div>
                </div>
              </div>

              {/* advertisement.net */}
              <div className="right_big_list_item border-b border-black/20 pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <a href="https://advertisement.net" target="_blank" className="domain_link text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
                    advertisement.net
                  </a>
                  <button className="pitch_button text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">
                    APPLY NOW
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">Buyout</span>
                      <a href="mailto:contact@of.domains" className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">contact us</a>
                    </div>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)]">$30.000</span>
                  </div>
                  <div className="border-l border-black/20 pl-4">
                    <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">subscription (first year)</span>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)] block">$550/month</span>
                  </div>
                </div>
              </div>

              {/* publication.net */}
              <div className="right_big_list_item border-b border-black/20 pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <a href="https://publication.net" target="_blank" className="domain_link text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
                    publication.net
                  </a>
                  <button className="pitch_button text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">
                    APPLY NOW
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">Buyout</span>
                      <a href="mailto:contact@of.domains" className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">contact us</a>
                    </div>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)]">$10.000</span>
                  </div>
                  <div className="border-l border-black/20 pl-4">
                    <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">subscription (first year)</span>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)] block">$250/month</span>
                  </div>
                </div>
              </div>

              {/* e-dogs.com */}
              <div className="right_big_list_item">
                <div className="flex justify-between items-center mb-2">
                  <a href="https://e-dogs.com" target="_blank" className="domain_link text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
                    e-dogs.com
                  </a>
                  <button className="pitch_button text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">
                    APPLY NOW
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">Buyout</span>
                      <a href="mailto:contact@of.domains" className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">contact us</a>
                    </div>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)]">$10.000</span>
                  </div>
                  <div className="border-l border-black/20 pl-4">
                    <span className="text-[10px] uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)]">subscription (first year)</span>
                    <span className="text-sm text-black font-[family-name:var(--font-geist-mono)] block">$250/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="big_title subscribe content-section bg-[#f5f2ed]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="big_title__item bg-[#ebe8e3] py-32 md:py-48 lg:py-64 px-8 flex flex-col items-center justify-center text-center">
            <p className="big_title__item_text text-3xl md:text-4xl lg:text-5xl text-black font-[family-name:var(--font-playfair)] leading-relaxed mb-4">
              Didn't find the right name?
            </p>
            <p className="big_title__subtitle text-xs uppercase tracking-wider text-black/60 font-[family-name:var(--font-geist-mono)] mb-8">
              Subscribe to get new names first
            </p>
            <form id="subscribeForm" action="#" method="post" className="flex gap-2 max-w-md w-full">
              <input 
                type="email" 
                name="email" 
                placeholder="YOUR EMAIL" 
                autoComplete="off" 
                required 
                className="flex-1 bg-[#d4d4d4] px-4 py-2 text-xs uppercase tracking-wider placeholder-black/40 font-[family-name:var(--font-geist-mono)] outline-none border-none"
              />
              <button 
                type="submit" 
                className="bg-black text-white px-4 py-2 text-xs uppercase tracking-wider font-[family-name:var(--font-geist-mono)] hover:bg-black/80 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer content-section bg-[#f5f2ed] py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="footer__item flex flex-col items-center text-center">
            <p className="footer__title text-6xl md:text-7xl lg:text-8xl text-black mb-4 font-[family-name:var(--font-playfair)]">
              Open Field
            </p>
            <p className="text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
              We turn premium domains
            </p>
            <p className="text-xs uppercase tracking-wider text-black mb-12 font-[family-name:var(--font-geist-mono)]">
              into startup assets
            </p>
            <div className="flex flex-col items-center gap-2 mb-8">
              <a href="https://coda.io/d/_dqu9AptdRB6/Terms-Conditions_suN26eAf" className="text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)] hover:underline">
                terms and conditions
              </a>
              <a href="https://coda.io/d/_dqu9AptdRB6/Privacy-Policy_suXZyt8a" className="text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)] hover:underline">
                privacy policy
              </a>
            </div>
            <a href="mailto:contact@of.domains" className="text-xs uppercase tracking-wider text-black mb-8 font-[family-name:var(--font-geist-mono)] hover:underline">
              contact@of.domains
            </a>
            <p className="text-xs uppercase tracking-wider text-black font-[family-name:var(--font-geist-mono)]">
              2025, Open field domains, inc
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
