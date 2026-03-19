import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';

interface SaveROIRequest {
  email?: string;
  name?: string;
  company?: string;
  position?: string;
  industry?: string;
  input: {
    useCase: string;
    package?: string;
    numEmployees: number;
    hourlyWage: number;
    weeklyHours: number;
    setupCost: number;
    monthlyCost: number;
    timeframMonths: number;
    rampUpMonths: number;
    priority?: string;
  };
  results: {
    weeklySavings: number;
    totalSavings: number;
    totalInvestment: number;
    netBenefit: number;
    roiPercent: number;
    amortizationMonths: number;
    productiveWeeks: number;
  };
}

export async function POST(request: NextRequest) {
  try {
    const data: SaveROIRequest = await request.json();

    if (!data.input || !data.results) {
      return NextResponse.json(
        { error: 'Missing required fields: input and results' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    const { error } = await supabase.from('roi_calculations').insert({
      email: data.email || null,
      name: data.name || null,
      company: data.company || null,
      position: data.position || null,
      industry: data.industry || null,
      use_case: data.input.useCase,
      package: data.input.package || null,
      num_employees: data.input.numEmployees,
      hourly_wage: data.input.hourlyWage,
      weekly_hours: data.input.weeklyHours,
      setup_cost: data.input.setupCost,
      monthly_cost: data.input.monthlyCost,
      timeframe_months: data.input.timeframMonths,
      ramp_up_months: data.input.rampUpMonths,
      priority: data.input.priority || null,
      weekly_savings: data.results.weeklySavings,
      total_savings: data.results.totalSavings,
      total_investment: data.results.totalInvestment,
      net_benefit: data.results.netBenefit,
      roi_percent: data.results.roiPercent,
      amortization_months: data.results.amortizationMonths,
      productive_weeks: data.results.productiveWeeks,
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to save calculation' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Save ROI calculation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';
