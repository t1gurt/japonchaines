/**
 * 自己申告システム管理hook
 * 実店舗訪問の自己申告と追跡機能
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
// Make sure VisitReport is exported from '../../types/tutorial'
// If it is not, either export it there or import the correct type here
// Example: If the type is named 'TutorialVisitReport', update as follows:
// import { TutorialVisitReport as VisitReport } from '../../types/tutorial';

// If VisitReport should be defined here, you can define it temporarily:
export type VisitReport = {
  id: string;
  chainId: string;
  visitDate: string;
  status: 'reported' | 'pending' | 'verified' | 'rejected';
  timestamp: string;
  hasPhoto?: boolean;
  // add other fields as needed
};

export const useSelfReporting = () => {
  const [reports, setReports] = useState<VisitReport[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // クライアントサイドかどうかを確認
  useEffect(() => {
    setIsClient(true);
  }, []);

  // LocalStorageからデータを読み込み - クライアントサイドでのみ
  useEffect(() => {
    if (!isClient) return;
    
    try {
      const stored = localStorage.getItem('tutorial_visit_reports');
      if (stored) {
        setReports(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading visit reports:', error);
    }
  }, [isClient]);

  // LocalStorageにデータを保存 - クライアントサイドでのみ
  useEffect(() => {
    if (!isClient) return;
    
    try {
      localStorage.setItem('tutorial_visit_reports', JSON.stringify(reports));
    } catch (error) {
      console.error('Error saving visit reports:', error);
    }
  }, [reports, isClient]);

  // レポートを提出
  const submitReport = useCallback(async (reportData: Omit<VisitReport, 'id' | 'timestamp' | 'status'>) => {
    setIsLoading(true);
    try {
      const newReport: VisitReport = {
        ...reportData,
        id: `report_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date().toISOString(),
        status: 'reported'
      };

      setReports(prev => [newReport, ...prev]);
      return newReport;
    } finally {
      setIsLoading(false);
    }
  }, [setReports]);

  // レポートを更新
  const updateReportStatus = useCallback((reportId: string, status: VisitReport['status']) => {
    setReports(prev => 
      prev.map(report => 
        report.id === reportId 
          ? { ...report, status }
          : report
      )
    );
  }, [setReports]);

  // レポートを削除
  const deleteReport = useCallback((reportId: string) => {
    setReports(prev => prev.filter(report => report.id !== reportId));
  }, [setReports]);

  // ステータス別レポート取得
  const reportsByStatus = {
    all: reports,
    reported: reports.filter(r => r.status === 'reported'),
    pending: reports.filter(r => r.status === 'pending'),
    verified: reports.filter(r => r.status === 'verified'),
    rejected: reports.filter(r => r.status === 'rejected')
  };

  // チェーン別レポート取得
  const getReportsByChain = useCallback((chainId: string) => {
    return reports.filter(report => report.chainId === chainId);
  }, [reports]);

  // 最新のレポート取得
  const getRecentReports = useCallback((limit: number = 10) => {
    return reports
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit);
  }, [reports]);

  // 統計情報
  const getTotalVisits = useCallback(() => {
    return reports.filter(r => r.status === 'verified' || r.status === 'reported').length;
  }, [reports]);

  const getUniqueChains = useCallback(() => {
    const chainIds = new Set(
      reports
        .filter(r => r.status === 'verified' || r.status === 'reported')
        .map(r => r.chainId)
    );
    return chainIds.size;
  }, [reports]);

  const getVisitStreak = useCallback(() => {
    const verifiedReports = reports
      .filter(r => r.status === 'verified' || r.status === 'reported')
      .sort((a, b) => new Date(b.visitDate).getTime() - new Date(a.visitDate).getTime());

    if (verifiedReports.length === 0) return 0;

    let streak = 1;
    let currentDate = new Date(verifiedReports[0].visitDate);

    for (let i = 1; i < verifiedReports.length; i++) {
      const reportDate = new Date(verifiedReports[i].visitDate);
      const daysDiff = Math.abs(currentDate.getTime() - reportDate.getTime()) / (1000 * 60 * 60 * 24);

      if (daysDiff <= 7) { // 1週間以内なら連続とみなす
        streak++;
        currentDate = reportDate;
      } else {
        break;
      }
    }

    return streak;
  }, [reports]);

  // 期間別統計
  const getVisitsByPeriod = useCallback((days: number) => {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    return reports.filter(report => {
      const reportDate = new Date(report.visitDate);
      return reportDate >= startDate && (report.status === 'verified' || report.status === 'reported');
    });
  }, [reports]);

  // 月別統計
  const getMonthlyStats = useCallback(() => {
    const stats: { [key: string]: number } = {};
    
    reports
      .filter(r => r.status === 'verified' || r.status === 'reported')
      .forEach(report => {
        const month = new Date(report.visitDate).toISOString().slice(0, 7); // YYYY-MM
        stats[month] = (stats[month] || 0) + 1;
      });

    return stats;
  }, [reports]);

  // チェーン別統計
  const getChainStats = useCallback(() => {
    const stats: { [chainId: string]: number } = {};
    
    reports
      .filter(r => r.status === 'verified' || r.status === 'reported')
      .forEach(report => {
        stats[report.chainId] = (stats[report.chainId] || 0) + 1;
      });

    return stats;
  }, [reports]);

  // 最後の訪問から経過日数
  const getDaysSinceLastVisit = useCallback(() => {
    const lastReport = reports
      .filter(r => r.status === 'verified' || r.status === 'reported')
      .sort((a, b) => new Date(b.visitDate).getTime() - new Date(a.visitDate).getTime())[0];

    if (!lastReport) return null;

    const lastVisitDate = new Date(lastReport.visitDate);
    const today = new Date();
    const diffTime = today.getTime() - lastVisitDate.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }, [reports]);

  // 写真付きレポートの割合
  const getPhotoReportPercentage = useCallback(() => {
    const totalReports = reports.filter(r => r.status === 'verified' || r.status === 'reported').length;
    if (totalReports === 0) return 0;

    const photoReports = reports.filter(r => 
      (r.status === 'verified' || r.status === 'reported') && r.hasPhoto
    ).length;

    return Math.round((photoReports / totalReports) * 100);
  }, [reports]);

  // 検証待ちレポートのアラート
  const hasPendingReports = reportsByStatus.pending.length > 0;

  return {
    // データ
    reports: reportsByStatus.all,
    reportedReports: reportsByStatus.reported,
    pendingReports: reportsByStatus.pending,
    verifiedReports: reportsByStatus.verified,
    rejectedReports: reportsByStatus.rejected,

    // 操作
    submitReport,
    updateReportStatus,
    deleteReport,

    // 取得機能
    getReportsByChain,
    getRecentReports,

    // 統計
    getTotalVisits,
    getUniqueChains,
    getVisitStreak,
    getVisitsByPeriod,
    getMonthlyStats,
    getChainStats,
    getDaysSinceLastVisit,
    getPhotoReportPercentage,

    // 状態
    isLoading,
    hasPendingReports,

    // 便利なプロパティ
    totalVisits: getTotalVisits(),
    uniqueChains: getUniqueChains(),
    visitStreak: getVisitStreak(),
    daysSinceLastVisit: getDaysSinceLastVisit(),
    photoReportPercentage: getPhotoReportPercentage()
  };
};
