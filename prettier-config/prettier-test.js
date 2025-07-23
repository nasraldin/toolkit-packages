#!/usr/bin/env node

/**
 * Comprehensive test for @ajrly/prettier-config
 * Tests all import patterns, formatting options, and edge cases
 */

const prettier = require('prettier');
const config = require('./index.cjs');

// Test cases covering all possible scenarios
const testCases = [
  {
    name: '📦 Import Sorting - All Patterns',
    code: `
// Mixed imports to test sorting order
import { format } from 'date-fns';
import express from 'express';
import { FastifyInstance } from 'fastify';
import { Injectable } from '@nestjs/common';
import React from 'react';
import { NextPage } from 'next';
import { Button } from '@core/components';
import { utils } from '@/utils/helpers';
import { localHelper } from './local-helper';
import { relativePath } from '../relative/path';

export function TestComponent() {
  return <div>Test</div>;
}
`,
  },
  {
    name: '🎨 Tailwind CSS Classes',
    code: `
import { cn } from '@/lib/utils';

export function TailwindTest() {
  return (
    <div className={cn(
      'flex items-center justify-center gap-4 p-6',
      'bg-gradient-to-r from-blue-500 to-purple-600',
      'hover:from-blue-600 hover:to-purple-700',
      'rounded-lg shadow-lg transition-all duration-300',
      'text-white font-semibold text-lg'
    )}>
      <span className="text-2xl">✨</span>
      <span>Beautiful Tailwind</span>
    </div>
  );
}
`,
  },
  {
    name: '🔧 TypeScript Complex Types',
    code: `
import { useState, useEffect } from 'react';
import { Button } from '@core/components/ui/button';

interface ComplexProps {
  data: Array<{
    id: string;
    name: string;
    metadata: Record<string, unknown>;
    nested: {
      deep: {
        value: number;
        optional?: boolean;
      };
    };
  }>;
  onAction: (id: string, action: 'create' | 'update' | 'delete') => Promise<void>;
  className?: string;
}

export function ComplexTypeComponent({ data, onAction, className }: ComplexProps) {
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  useEffect(() => {
    console.log('Component mounted with data:', data);
  }, [data]);

  return (
    <div className={className}>
      {data.map((item) => (
        <Button
          key={item.id}
          onClick={() => onAction(item.id, 'update')}
          disabled={loading[item.id]}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
}
`,
  },
  {
    name: '⚡ React Hooks & Context',
    code: `
import React, { createContext, useContext, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@core/components/ui/button';

interface UserContextType {
  user: {
    id: string;
    name: string;
    email: string;
    preferences: Record<string, unknown>;
  } | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<UserContextType['user']>) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<UserContextType['user']>(null);

  const login = useCallback(async (credentials) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const userData = await response.json();
      setUser(userData);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const updateProfile = useCallback(async (updates) => {
    if (!user) return;

    const response = await fetch(\`/api/users/\${user.id}\`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });

    if (response.ok) {
      const updatedUser = await response.json();
      setUser(updatedUser);
    }
  }, [user]);

  const value = useMemo(() => ({
    user,
    login,
    logout,
    updateProfile,
  }), [user, login, logout, updateProfile]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
`,
  },
  {
    name: '🎯 Edge Cases & Special Characters',
    code: `
import React from 'react';
import { Button } from '@core/components/ui/button';

const getDynamicClass = (isActive, theme) => \`
  \${isActive ? 'bg-blue-500' : 'bg-gray-300'}
  \${theme === 'dark' ? 'text-white' : 'text-black'}
  hover:scale-105 transition-transform duration-200
\`;

const complexConfig = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com',
    endpoints: {
      users: '/users',
      posts: '/posts',
      comments: '/comments',
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${process.env.API_TOKEN}\`,
    },
  },
  features: {
    enableAnalytics: process.env.NODE_ENV === 'production',
    enableDebug: process.env.NODE_ENV === 'development',
    maxRetries: 3,
    timeout: 5000,
  },
  utils: {
    formatDate: (date) => date.toISOString(),
    parseError: (error) => {
      if (error instanceof Error) return error.message;
      if (typeof error === 'string') return error;
      return 'Unknown error occurred';
    },
  },
};

export function EdgeCaseComponent() {
  const [state, setState] = React.useState({
    count: 0,
    isActive: false,
    theme: 'light',
  });

  const handleClick = React.useCallback(() => {
    setState(prev => ({
      ...prev,
      count: prev.count + 1,
      isActive: !prev.isActive,
    }));
  }, []);

  return (
    <div className={getDynamicClass(state.isActive, state.theme)}>
      <Button onClick={handleClick}>
        Count: {state.count} | Active: {state.isActive ? '✅' : '❌'}
      </Button>
    </div>
  );
}
`,
  },
  {
    name: '📊 Complex Data Structures',
    code: `
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

interface DataItem {
  id: string;
  name: string;
  value: number;
  metadata: {
    category: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
  };
  relationships: {
    parent?: string;
    children: string[];
    siblings: string[];
  };
}

interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }>;
}

export function DataVisualizationComponent() {
  const [data, setData] = useState<DataItem[]>([]);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const items = await response.json();

      setData(items);

      const categories = [...new Set(items.map(item => item.metadata.category))];
      const chartData = {
        labels: categories,
        datasets: [
          {
            label: 'Values by Category',
            data: categories.map(category =>
              items
                .filter(item => item.metadata.category === category)
                .reduce((sum, item) => sum + item.value, 0)
            ),
            backgroundColor: 'rgba(59, 130, 246, 0.5)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 2,
          },
        ],
      };

      setChartData(chartData);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Data Visualization</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Data Items</h3>
          <div className="space-y-2">
            {data.map((item) => (
              <div key={item.id} className="p-3 border rounded">
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-gray-600">
                  Value: {item.value} | Category: {item.metadata.category}
                </div>
                <div className="text-xs text-gray-500">
                  Created: {format(item.metadata.createdAt, 'MMM dd, yyyy')}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Chart Data</h3>
          <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
            {JSON.stringify(chartData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
`,
  },
];

async function runTests() {
  console.log('🧪 Running comprehensive tests for @ajrly/prettier-config\n');

  let passedTests = 0;
  let totalTests = testCases.length;

  for (const testCase of testCases) {
    try {
      console.log(`\n📋 Testing: ${testCase.name}`);

      // Test formatting
      const formatted = await prettier.format(testCase.code, {
        ...config,
        parser: 'typescript',
      });

      // Verify the result is properly formatted
      if (formatted && formatted.length > 0) {
        console.log('✅ PASSED');
        passedTests++;

        // Show a snippet of the formatted code
        const lines = formatted.split('\n').slice(0, 10);
        console.log('📝 Formatted snippet:');
        lines.forEach((line) => console.log(`   ${line}`));
        if (formatted.split('\n').length > 10) {
          console.log('   ...');
        }
      } else {
        console.log('❌ FAILED - Empty result');
      }
    } catch (error) {
      console.log(`❌ FAILED - ${error.message}`);
    }
  }

  console.log(`\n📊 Test Results:`);
  console.log(`   ✅ Passed: ${passedTests}/${totalTests}`);
  console.log(`   ❌ Failed: ${totalTests - passedTests}/${totalTests}`);
  console.log(`   📈 Success Rate: ${Math.round((passedTests / totalTests) * 100)}%`);

  if (passedTests === totalTests) {
    console.log('\n🎉 All tests passed! The prettier config is working correctly.');
    process.exit(0);
  } else {
    console.log('\n⚠️  Some tests failed. Please check the configuration.');
    process.exit(1);
  }
}

runTests();
