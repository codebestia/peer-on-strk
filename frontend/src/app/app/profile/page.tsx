"use client";
import DepositWithdrawPeer from './DepositWithdrawPeer';
import React from 'react';
import Nav from "../Nav";
import Sidebar from "../sidebar";
import Dashboard from './Dashboard';
import Table from './Table';
import Footer from '../footer';
import CryptoAnalyticsChart from './CryptoAnalyticsChart';
import { useAccount } from '@starknet-react/core';

const profile = () => {
  const { address } = useAccount();
  return (
    <main className="bg-[#F5F5F5] min-h-screen">
      <div className="flex">
        <Sidebar />
        <div className="w-full md:flex-1 flex flex-col">
          <Nav />
          {address ? (
            <>
          <div className='flex flex-col xl:flex-row gap-6 py-6 px-3 md:px-8'>
           
            <div className="w-full md:flex-wrap md:basis-[70%] flex">
              <Dashboard />
            </div>
            <div className="w-full md:flex-grow md:basis-[30%] flex">
              <DepositWithdrawPeer />
            </div>
          </div>
          <CryptoAnalyticsChart/>
          <Table />
          <Footer/>
          </>
          ) : (
            <div className="flex items-center justify-center h-[calc(100vh-64px)]">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-black">Please connect your wallet to continue</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default profile;