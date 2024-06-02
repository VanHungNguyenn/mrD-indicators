import React from 'react'
import image1 from '@/public/coin/1.png'
import image2 from '@/public/coin/2.png'
import image3 from '@/public/coin/3.png'
import image4 from '@/public/coin/4.png'
import image5 from '@/public/coin/5.png'
import image6 from '@/public/coin/6.png'
import image7 from '@/public/coin/7.png'

import chart from '@/public/chart.svg'
import Image from 'next/image'

const listInforCoins = [
    {
        title: 'Bitcoin',
        symbol: 'BTC',
        image: image1,
        price: 69000,
        chart: chart,
        change: "+1.2",
    },
    {
        title: 'Ethereum',
        symbol: 'ETH',
        image: image2,
        price: 69000,
        chart: chart,
        change: "+1.2",
    },
    {
        title: 'Binance Coin',
        symbol: 'BNB',
        image: image3,
        price: 69000,
        chart: chart,
        change: "+1.2",
    },
    {
        title: 'Cardano',
        symbol: 'ADA',
        image: image4,
        price: 69000,
        chart: chart,
        change: "+1.2",
    },
    {
        title: 'XRP',
        symbol: 'XRP',
        image: image5,
        price: 69000,
        chart: chart,
        change: "+1.2",
    },
    {
        title: 'Solana',
        symbol: 'SOL',
        image: image6,
        price: 69000,
        chart: chart,
        change: "+1.2",
    },
    {
        title: 'Polkadot',
        symbol: 'DOT',
        image: image7,
        price: 69000,
        chart: chart,
        change: "+1.2",
    },
]

const ViewCoin = () => {
    return (
        <div
            className='relative m-1 flex items-center justify-between'
        >
            <div>
                <div>
                    <Image
                        src={image1}
                        alt='coin'
                        width={32}
                        height={32}
                        className='object-cover'
                    />
                </div>
                <div>
                    <p className='text-white'>Bitcoin</p>
                    <p className='text-gray-400'>BTC</p>
                </div>
            </div>
        </div>
    )
}

export default ViewCoin