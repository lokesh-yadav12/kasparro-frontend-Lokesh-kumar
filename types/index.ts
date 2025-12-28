// Core data types for Kasparro platform

export interface Brand {
  id: string;
  name: string;
  domain: string;
  industry: string;
}

export interface AuditModule {
  id: string;
  name: string;
  description: string;
  score: number;
  status: 'excellent' | 'good' | 'needs-improvement' | 'critical';
  insights: string[];
  issues: Issue[];
  recommendations: string[];
}

export interface Issue {
  id: string;
  severity: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  impact: string;
}

export interface BrandSnapshot {
  brandId: string;
  aiVisibilityScore: number;
  trustScore: number;
  keywordCoverage: number;
  lastAuditDate: string;
  trend: 'up' | 'down' | 'stable';
}

export interface AuditData {
  brandId: string;
  timestamp: string;
  modules: {
    brandPresence: AuditModule;
    contentQuality: AuditModule;
    eeat: AuditModule;
    semanticRelevance: AuditModule;
    competitivePosition: AuditModule;
    technicalSeo: AuditModule;
    aiReadiness: AuditModule;
  };
}

export type ModuleKey = keyof AuditData['modules'];
