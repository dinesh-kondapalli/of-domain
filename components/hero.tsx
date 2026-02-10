export default function Home() {
  return (
    <>
      <section style={{ zIndex: 9999, position: "relative" }}>
        <section className="hero clean_bg content-section min-h-screen flex items-center justify-center bg-[#f5f2ed]">
          <div className="container mx-auto px-4">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-normal text-black tracking-tight leading-none mb-8 font-serif">
                  Open Field
                </h1>
                <p className="text-lg uppercase text-black font-mono">
                  We turn premium domains
                  <br />
                  into startup assets
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="tile content-section bg-[#f5f2ed] pb-4">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="tile__item bg-[#ebe8e3] aspect-square flex items-center justify-center p-8">
                <p className="tile__item_text text-2xl md:text-3xl lg:text-4xl text-black text-center font-serif leading-tight">
                  Not every land fits
                  <br />
                  every seed
                </p>
              </div>

              <div className="tile__item bg-[#ebe8e3] aspect-square flex items-center justify-center p-8">
                <p className="tile__item_text text-2xl md:text-3xl lg:text-4xl text-black text-center font-serif leading-tight">
                  Not every seed
                  <br />
                  grows alone
                </p>
              </div>

              <div className="tile__item bg-[#ebe8e3] aspect-square flex items-center justify-center p-8">
                <p className="tile__item_text text-2xl md:text-3xl lg:text-4xl text-black text-center font-serif leading-tight">
                  A domain holds
                  <br />
                  potential
                </p>
              </div>

              <div className="tile__item bg-[#ebe8e3] aspect-square flex items-center justify-center p-8">
                <p className="tile__item_text text-2xl md:text-3xl lg:text-4xl text-black text-center font-serif leading-tight">
                  A founder brings
                  <br />
                  intent
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="big_title content-section bg-[#f5f2ed] pb-4">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="big_title__item bg-[#ebe8e3] py-32 md:py-48 lg:py-64 px-8 flex flex-col items-center justify-center text-center">
              <p className="big_title__item_text text-2xl md:text-3xl lg:text-4xl text-black font-serif leading-relaxed mb-6">
                Together, they can grow something real
              </p>
              <p className="big_title__item_text text-2xl md:text-3xl lg:text-4xl text-black font-serif leading-relaxed">
                And we make it happen
              </p>
            </div>
          </div>
        </section>

        <section className="how content-section bg-[#f5f2ed] pb-4">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#ebe8e3] p-3">
                <p className="corner__title text-3xl md:text-4xl text-black font-serif">
                  How it works
                </p>
              </div>
              <div className="bg-[#ebe8e3] p-3 flex text-md flex-col">
                <div className="how__right_list">
                  <p className="right_list_item uppercase tracking-wider text-black border-b border-black/20 font-mono">
                    Pick a domain
                  </p>
                  <p className="right_list_item uppercase tracking-wider text-black border-b border-black/20 font-mono">
                    subscribe
                  </p>
                  <p className="right_list_item uppercase tracking-wider text-black border-b border-black/20 font-mono">
                    build
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="how__right_footer_left border-r border-black/20 pr-2">
                    <p className="how__right_footer__title uppercase tracking-wider text-black font-mono">
                      if success
                    </p>
                    <p className="text-black/60 font-mono uppercase tracking-wider">
                      you buyout domain
                    </p>
                    <p className="text-black/60 font-mono uppercase tracking-wider">
                      and own it
                    </p>
                  </div>
                  <div className="how__right_footer_right pl-2">
                    <p className="how__right_footer__title uppercase tracking-wider text-black font-mono">
                      if failure
                    </p>
                    <p className="text-black/60 font-mono uppercase tracking-wider">
                      domain returns
                    </p>
                    <p className="text-black/60 font-mono uppercase tracking-wider">
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
              <p className="big_title__item_text text-2xl md:text-3xl lg:text-4xl text-black font-serif leading-relaxed">
                No cold emails. No upfront costs. Just a clean
                <br />
                contract and a good name to build on
              </p>
            </div>
          </div>
        </section>

        <section className="deal content-section bg-[#f5f2ed] pb-4">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#ebe8e3] p-4">
                <p className="corner__title text-3xl md:text-4xl text-black font-serif">
                  The deal
                </p>
              </div>
              <div className="bg-[#ebe8e3] p-4 text-lg flex flex-col">
                <p className="uppercase text-black mb-4 font-mono">
                  If you&apos;re starting something new, raising money, or
                  running a business - but your name isn&apos;t right - this is
                  for you. You get the name. You build.
                </p>
                <p className="uppercase text-black mb-6 font-mono">
                  If it&apos;s a match, you get the name. You build.
                </p>
                <a
                  href="#"
                  className="button bg-black text-white px-6 py-3 uppercase inline-block w-fit mb-2 font-mono"
                >
                  see available domains
                </a>
                <div className="mt-auto">
                  <p className="right_list_item uppercase text-black border-b border-black/20 font-mono">
                    Clean legal structure
                  </p>
                  <p className="right_list_item uppercase text-black border-b border-black/20 font-mono">
                    Time-bound or milestone-based subscription
                  </p>
                  <p className="right_list_item uppercase text-black border-b border-black/20 font-mono">
                    No hidden terms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="big_list"
          className="big_list content-section bg-[#f5f2ed] pb-4"
        >
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Top Tier */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#ebe8e3] p-4">
                <p className="corner__title text-3xl md:text-4xl text-black font-serif">
                  Top Tier
                </p>
              </div>
              <div className="bg-[#ebe8e3] p-4">
                 {/* top100.com */}
                <div className="right_big_list_item border-t border-black mb-4">
                  <div className="flex justify-between items-center py-1 border-b border-black hover:bg-yellow-300">
                    <a
                      href="https://top100.com"
                      target="_blank"
                      className="domain_link text-[18px] text-black font-mono leading-[20px] hover:bg-yellow-300 px-1"
                    >
                      top100.com
                    </a>
                    <button className="pitch_button text-[18px] text-black/60 font-mono leading-[20px]">
                      APPLY NOW
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                          Buyout
                        </span>
                        <a
                          href="mailto:contact@of.domains"
                          className="text-[18px] text-black/60 font-mono leading-[20px]"
                        >
                          contact us
                        </a>
                      </div>
                      <span className="text-[18px] text-black font-mono leading-[20px]">
                        $700.000
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                        subscription (first year)
                      </span>
                      <span className="text-[18px] text-black font-mono leading-[20px] block">
                        $7.700/month
                      </span>
                    </div>
                  </div>
                </div>

                 {/* effect.com */}
                <div className="right_big_list_item border-t border-black mb-4">
                  <div className="flex justify-between items-center py-1 border-b border-black hover:bg-yellow-300">
                    <a
                      href="https://effect.com"
                      target="_blank"
                      className="domain_link text-[18px] text-black font-mono leading-[20px] hover:bg-yellow-300 px-1"
                    >
                      effect.com
                    </a>
                    <button className="pitch_button text-[18px] text-black/60 font-mono leading-[20px]">
                      APPLY NOW
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                          Buyout
                        </span>
                        <a
                          href="mailto:contact@of.domains"
                          className="text-[18px] text-black/60 font-mono leading-[20px]"
                        >
                          contact us
                        </a>
                      </div>
                      <span className="text-[18px] text-black font-mono leading-[20px]">
                        $700.000
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                        subscription (first year)
                      </span>
                      <span className="text-[18px] text-black font-mono leading-[20px] block">
                        $7.700/month
                      </span>
                    </div>
                  </div>
                </div>

                 {/* medclinic.com */}
                <div className="right_big_list_item border-t border-black mb-4">
                  <div className="flex justify-between items-center py-1 border-b border-black hover:bg-yellow-300">
                    <a
                      href="https://medclinic.com"
                      target="_blank"
                      className="domain_link text-[18px] text-black font-mono leading-[20px] hover:bg-yellow-300 px-1"
                    >
                      medclinic.com
                    </a>
                    <button className="pitch_button text-[18px] text-black/60 font-mono leading-[20px]">
                      APPLY NOW
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                          Buyout
                        </span>
                        <a
                          href="mailto:contact@of.domains"
                          className="text-[18px] text-black/60 font-mono leading-[20px]"
                        >
                          contact us
                        </a>
                      </div>
                      <span className="text-[18px] text-black font-mono leading-[20px]">
                        $300.000
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                        subscription (first year)
                      </span>
                      <span className="text-[18px] text-black font-mono leading-[20px] block">
                        $3.600/month
                      </span>
                    </div>
                  </div>
                </div>

                 {/* people.net */}
                <div className="right_big_list_item border-t border-black mb-4">
                  <div className="flex justify-between items-center py-1 border-b border-black hover:bg-yellow-300">
                    <a
                      href="https://people.net"
                      target="_blank"
                      className="domain_link text-[18px] text-black font-mono leading-[20px] hover:bg-yellow-300 px-1"
                    >
                      people.net
                    </a>
                    <button className="pitch_button text-[18px] text-black/60 font-mono leading-[20px]">
                      APPLY NOW
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                          Buyout
                        </span>
                        <a
                          href="mailto:contact@of.domains"
                          className="text-[18px] text-black/60 font-mono leading-[20px]"
                        >
                          contact us
                        </a>
                      </div>
                      <span className="text-[18px] text-black font-mono leading-[20px]">
                        $300.000
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                        subscription (first year)
                      </span>
                      <span className="text-[18px] text-black font-mono leading-[20px] block">
                        $3.600/month
                      </span>
                    </div>
                  </div>
                </div>

                 {/* shows.net */}
                <div className="right_big_list_item border-t border-black mb-4">
                  <div className="flex justify-between items-center py-1 border-b border-black hover:bg-yellow-300">
                    <a
                      href="https://shows.net"
                      target="_blank"
                      className="domain_link text-[18px] text-black font-mono leading-[20px] hover:bg-yellow-300 px-1"
                    >
                      shows.net
                    </a>
                    <button className="pitch_button text-[18px] text-black/60 font-mono leading-[20px]">
                      APPLY NOW
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                          Buyout
                        </span>
                        <a
                          href="mailto:contact@of.domains"
                          className="text-[18px] text-black/60 font-mono leading-[20px]"
                        >
                          contact us
                        </a>
                      </div>
                      <span className="text-[18px] text-black font-mono leading-[20px]">
                        $100.000
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                        subscription (first year)
                      </span>
                      <span className="text-[18px] text-black font-mono leading-[20px] block">
                        $1.300/month
                      </span>
                    </div>
                  </div>
                </div>

                 {/* account.net */}
                <div className="right_big_list_item border-t border-black mb-4">
                  <div className="flex justify-between items-center py-1 border-b border-black hover:bg-yellow-300">
                    <a
                      href="https://account.net"
                      target="_blank"
                      className="domain_link text-[18px] text-black font-mono leading-[20px] hover:bg-yellow-300 px-1"
                    >
                      account.net
                    </a>
                    <button className="pitch_button text-[18px] text-black/60 font-mono leading-[20px]">
                      APPLY NOW
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                          Buyout
                        </span>
                        <a
                          href="mailto:contact@of.domains"
                          className="text-[18px] text-black/60 font-mono leading-[20px]"
                        >
                          contact us
                        </a>
                      </div>
                      <span className="text-[18px] text-black font-mono leading-[20px]">
                        $100.000
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                        subscription (first year)
                      </span>
                      <span className="text-[18px] text-black font-mono leading-[20px] block">
                        $1.300/month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mid Tier */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#ebe8e3] p-4">
                <p className="corner__title text-3xl md:text-4xl text-black font-serif">
                  Mid Tier
                </p>
              </div>
              <div className="bg-[#ebe8e3] p-4">
                {/* cels.com */}
                <div className="right_big_list_item border-t border-black mb-4">
                  <div className="flex justify-between items-center py-1 border-b border-black hover:bg-yellow-300">
                    <a
                      href="https://cels.com"
                      target="_blank"
                      className="domain_link text-[18px] text-black font-mono leading-[20px] hover:bg-yellow-300 px-1"
                    >
                      cels.com
                    </a>
                    <button className="pitch_button text-[18px] text-black/60 font-mono leading-[20px]">
                      APPLY NOW
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                          Buyout
                        </span>
                        <a
                          href="mailto:contact@of.domains"
                          className="text-[18px] text-black/60 font-mono leading-[20px]"
                        >
                          contact us
                        </a>
                      </div>
                      <span className="text-[18px] text-black font-mono leading-[20px]">
                        $70.000
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                        subscription (first year)
                      </span>
                      <span className="text-[18px] text-black font-mono leading-[20px] block">
                        $950/month
                      </span>
                    </div>
                  </div>
                </div>

                {/* beads.org */}
                <div className="right_big_list_item border-t border-black mb-4">
                  <div className="flex justify-between items-center py-1 border-b border-black hover:bg-yellow-300">
                    <a
                      href="https://beads.org"
                      target="_blank"
                      className="domain_link text-[18px] text-black font-mono leading-[20px] hover:bg-yellow-300 px-1"
                    >
                      beads.org
                    </a>
                    <button className="pitch_button text-[18px] text-black/60 font-mono leading-[20px]">
                      APPLY NOW
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                          Buyout
                        </span>
                        <a
                          href="mailto:contact@of.domains"
                          className="text-[18px] text-black/60 font-mono leading-[20px]"
                        >
                          contact us
                        </a>
                      </div>
                      <span className="text-[18px] text-black font-mono leading-[20px]">
                        $70.000
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                        subscription (first year)
                      </span>
                      <span className="text-[18px] text-black font-mono leading-[20px] block">
                        $950/month
                      </span>
                    </div>
                  </div>
                </div>

                {/* smug.com */}
                <div className="right_big_list_item border-t border-black mb-4">
                  <div className="flex justify-between items-center py-1 border-b border-black hover:bg-yellow-300">
                    <a
                      href="https://smug.com"
                      target="_blank"
                      className="domain_link text-[18px] text-black font-mono leading-[20px] hover:bg-yellow-300 px-1"
                    >
                      smug.com
                    </a>
                    <button className="pitch_button text-[18px] text-black/60 font-mono leading-[20px]">
                      APPLY NOW
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                          Buyout
                        </span>
                        <a
                          href="mailto:contact@of.domains"
                          className="text-[18px] text-black/60 font-mono leading-[20px]"
                        >
                          contact us
                        </a>
                      </div>
                      <span className="text-[18px] text-black font-mono leading-[20px]">
                        $50.000
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                        subscription (first year)
                      </span>
                      <span className="text-[18px] text-black font-mono leading-[20px] block">
                        $750/month
                      </span>
                    </div>
                  </div>
                </div>

                {/* publisher.net */}
                <div className="right_big_list_item border-t border-black mb-4">
                  <div className="flex justify-between items-center py-1 border-b border-black hover:bg-yellow-300">
                    <a
                      href="https://publisher.net"
                      target="_blank"
                      className="domain_link text-[18px] text-black font-mono leading-[20px] hover:bg-yellow-300 px-1"
                    >
                      publisher.net
                    </a>
                    <button className="pitch_button text-[18px] text-black/60 font-mono leading-[20px]">
                      APPLY NOW
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                          Buyout
                        </span>
                        <a
                          href="mailto:contact@of.domains"
                          className="text-[18px] text-black/60 font-mono leading-[20px]"
                        >
                          contact us
                        </a>
                      </div>
                      <span className="text-[18px] text-black font-mono leading-[20px]">
                        $40.000
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                        subscription (first year)
                      </span>
                      <span className="text-[18px] text-black font-mono leading-[20px] block">
                        $650/month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Low Tier */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#ebe8e3] p-4">
                <p className="corner__title text-3xl md:text-4xl text-black font-serif">
                  Low Tier
                </p>
              </div>
              <div className="bg-[#ebe8e3] p-4">
                {/* airways.net */}
                <div className="right_big_list_item border-t border-black mb-4">
                  <div className="flex justify-between items-center py-1 border-b border-black hover:bg-yellow-300">
                    <a
                      href="https://airways.net"
                      target="_blank"
                      className="domain_link text-[18px] text-black font-mono leading-[20px] hover:bg-yellow-300 px-1"
                    >
                      airways.net
                    </a>
                    <button className="pitch_button text-[18px] text-black/60 font-mono leading-[20px]">
                      APPLY NOW
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                          Buyout
                        </span>
                        <a
                          href="mailto:contact@of.domains"
                          className="text-[18px] text-black/60 font-mono leading-[20px]"
                        >
                          contact us
                        </a>
                      </div>
                      <span className="text-[18px] text-black font-mono leading-[20px]">
                        $30.000
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                        subscription (first year)
                      </span>
                      <span className="text-[18px] text-black font-mono leading-[20px] block">
                        $550/month
                      </span>
                    </div>
                  </div>
                </div>

                {/* womensports.com */}
                <div className="right_big_list_item border-t border-black mb-4">
                  <div className="flex justify-between items-center py-1 border-b border-black hover:bg-yellow-300">
                    <a
                      href="https://womensports.com"
                      target="_blank"
                      className="domain_link text-[18px] text-black font-mono leading-[20px] hover:bg-yellow-300 px-1"
                    >
                      womensports.com
                    </a>
                    <button className="pitch_button text-[18px] text-black/60 font-mono leading-[20px]">
                      APPLY NOW
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                          Buyout
                        </span>
                        <a
                          href="mailto:contact@of.domains"
                          className="text-[18px] text-black/60 font-mono leading-[20px]"
                        >
                          contact us
                        </a>
                      </div>
                      <span className="text-[18px] text-black font-mono leading-[20px]">
                        $30.000
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                        subscription (first year)
                      </span>
                      <span className="text-[18px] text-black font-mono leading-[20px] block">
                        $550/month
                      </span>
                    </div>
                  </div>
                </div>

                {/* advertisement.net */}
                <div className="right_big_list_item border-t border-black mb-4">
                  <div className="flex justify-between items-center py-1 border-b border-black hover:bg-yellow-300">
                    <a
                      href="https://advertisement.net"
                      target="_blank"
                      className="domain_link text-[18px] text-black font-mono leading-[20px] hover:bg-yellow-300 px-1"
                    >
                      advertisement.net
                    </a>
                    <button className="pitch_button text-[18px] text-black/60 font-mono leading-[20px]">
                      APPLY NOW
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                          Buyout
                        </span>
                        <a
                          href="mailto:contact@of.domains"
                          className="text-[18px] text-black/60 font-mono leading-[20px]"
                        >
                          contact us
                        </a>
                      </div>
                      <span className="text-[18px] text-black font-mono leading-[20px]">
                        $30.000
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                        subscription (first year)
                      </span>
                      <span className="text-[18px] text-black font-mono leading-[20px] block">
                        $550/month
                      </span>
                    </div>
                  </div>
                </div>

                {/* publication.net */}
                <div className="right_big_list_item border-t border-black mb-4">
                  <div className="flex justify-between items-center py-1 border-b border-black hover:bg-yellow-300">
                    <a
                      href="https://publication.net"
                      target="_blank"
                      className="domain_link text-[18px] text-black font-mono leading-[20px] hover:bg-yellow-300 px-1"
                    >
                      publication.net
                    </a>
                    <button className="pitch_button text-[18px] text-black/60 font-mono leading-[20px]">
                      APPLY NOW
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                          Buyout
                        </span>
                        <a
                          href="mailto:contact@of.domains"
                          className="text-[18px] text-black/60 font-mono leading-[20px]"
                        >
                          contact us
                        </a>
                      </div>
                      <span className="text-[18px] text-black font-mono leading-[20px]">
                        $10.000
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                        subscription (first year)
                      </span>
                      <span className="text-[18px] text-black font-mono leading-[20px] block">
                        $250/month
                      </span>
                    </div>
                  </div>
                </div>

                {/* e-dogs.com */}
                <div className="right_big_list_item border-t border-black mb-4">
                  <div className="flex justify-between items-center py-1 border-b border-black hover:bg-yellow-300">
                    <a
                      href="https://e-dogs.com"
                      target="_blank"
                      className="domain_link text-[18px] text-black font-mono leading-[20px] hover:bg-yellow-300 px-1"
                    >
                      e-dogs.com
                    </a>
                    <button className="pitch_button text-[18px] text-black/60 font-mono leading-[20px]">
                      APPLY NOW
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                          Buyout
                        </span>
                        <a
                          href="mailto:contact@of.domains"
                          className="text-[18px] text-black/60 font-mono leading-[20px]"
                        >
                          contact us
                        </a>
                      </div>
                      <span className="text-[18px] text-black font-mono leading-[20px]">
                        $10.000
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[18px] text-black/60 font-mono leading-[20px]">
                        subscription (first year)
                      </span>
                      <span className="text-[18px] text-black font-mono leading-[20px] block">
                        $250/month
                      </span>
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
              <p className="big_title__item_text text-3xl md:text-4xl lg:text-5xl text-black font-serif leading-relaxed mb-4">
                Didn&apos;t find the right name?
              </p>
              <p className="big_title__subtitle text-xs uppercase tracking-wider text-black/60 font-mono mb-8">
                Subscribe to get new names first
              </p>
              <form
                id="subscribeForm"
                action="#"
                method="post"
                className="flex gap-2 max-w-md w-full"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL"
                  autoComplete="off"
                  required
                  className="flex-1 bg-[#d4d4d4] px-4 py-2 text-xs uppercase tracking-wider placeholder-black/40 font-mono outline-none border-none"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 text-xs uppercase tracking-wider font-mono hover:bg-black/80 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="footer content-section bg-[#f5f2ed] py-60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="footer__item flex flex-col items-center text-center">
              <p className="footer__title text-[160px] text-black font-normal font-serif leading-[160px]">
                Open Field
              </p>
              <p className="text-[18px] text-black font-normal font-mono leading-[20px]">
                We turn premium domains
              </p>
              <p className="text-[18px] text-black font-normal font-mono leading-[20px] mb-12">
                into startup assets
              </p>
              <div className="flex flex-col items-center gap-2 mb-8">
                <a
                  href="https://coda.io/d/_dqu9AptdRB6/Terms-Conditions_suN26eAf"
                  className="text-[18px] text-black font-normal font-mono leading-[20px] hover:underline"
                >
                  terms and conditions
                </a>
                <a
                  href="https://coda.io/d/_dqu9AptdRB6/Privacy-Policy_suXZyt8a"
                  className="text-[18px] text-black font-normal font-mono leading-[20px] hover:underline"
                >
                  privacy policy
                </a>
              </div>
              <a
                href="mailto:contact@of.domains"
                className="text-[18px] text-black font-normal font-mono leading-[20px] hover:underline"
              >
                contact@of.domains
              </a>
              <p className="text-[18px] text-black font-normal font-mono leading-[20px]">
                2025, Open field domains, inc
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
