"use client"

import { useEffect, useState } from "react"
import useSWR from "swr"

const cryptoIds: Record<string, string> = {
  Uniswap: "uniswap",
  Aave: "aave",
  Raydium: "raydium",
  Jupiter: "jupiter-exchange-solana",
}

const investments = [
  {
    name: "Uniswap",
    chain: "Ethereum",
    type: "DEX Protocol",
    performance: "+247%",
    icon: "🦄",
    color: "from-pink-500/20 to-purple-500/20",
    borderColor: "border-pink-500/30",
  },
  {
    name: "Aave",
    chain: "Ethereum",
    type: "Lending Protocol",
    performance: "+189%",
    icon: "👻",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    name: "Raydium",
    chain: "Solana",
    type: "AMM & Liquidity",
    performance: "+312%",
    icon: "⚡",
    color: "from-purple-500/20 to-indigo-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    name: "Jupiter",
    chain: "Solana",
    type: "DEX Aggregator",
    performance: "+428%",
    icon: "🪐",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
  },
]

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function InvestmentsShowcase() {
  const [prices, setPrices] = useState<Record<string, number>>({})

  const ids = Object.values(cryptoIds).join(",")
  const { data, error } = useSWR(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`,
    fetcher,
    {
      refreshInterval: 30000, // Refresh every 30 seconds
      revalidateOnFocus: true,
    },
  )

  useEffect(() => {
    if (data) {
      const newPrices: Record<string, number> = {}
      Object.entries(cryptoIds).forEach(([name, id]) => {
        if (data[id]?.usd) {
          newPrices[name] = data[id].usd
        }
      })
      setPrices(newPrices)
    }
  }, [data])

  return (
    <section className="absolute bottom-8 right-8 z-20 max-w-md">
      <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-white text-lg font-light">Select Investments</h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/60 text-xs font-light">Live</span>
          </div>
        </div>

        <div className="space-y-3">
          {investments.map((investment, index) => (
            <div
              key={index}
              className={`relative rounded-xl bg-gradient-to-br ${investment.color} backdrop-blur-sm border ${investment.borderColor} p-4 transition-all duration-300 hover:scale-[1.02] hover:border-white/30 cursor-pointer group`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{investment.icon}</div>
                  <div>
                    <h3 className="text-white font-medium text-sm">{investment.name}</h3>
                    <p className="text-white/50 text-xs font-light">{investment.type}</p>
                    {prices[investment.name] && (
                      <p className="text-white/70 text-xs font-medium mt-1">
                        $
                        {prices[investment.name].toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-400 font-medium text-sm">{investment.performance}</div>
                  <div className="text-white/40 text-xs font-light">{investment.chain}</div>
                </div>
              </div>

              {/* Subtle shine effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/50 font-light">Total Portfolio Value</span>
            <span className="text-white font-medium">$2.4M</span>
          </div>
        </div>
      </div>
    </section>
  )
}
