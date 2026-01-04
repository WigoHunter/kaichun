'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface WritingData {
  date: string;
  wordCount: number;
}

interface HeatmapProps {
  className?: string;
}

const WritingStreakHeatmap: React.FC<HeatmapProps> = ({ className = '' }) => {
  const [data, setData] = useState<WritingData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations('writingStreak');

  useEffect(() => {
    fetchWritingData();
  }, []);

  const fetchWritingData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQvP9oU1zM6VveAVxAKZ29G3K4ahJP1GNELfujow0V5qo4tLUfKANPmkOpQJaGsvE6I3XfnZ7dyZfeL/pub?output=csv');

      if (!response.ok) {
        throw new Error('Failed to fetch writing data');
      }

      const csvText = await response.text();
      const rows = csvText.split('\n').slice(1); // Skip header row
      const processedData = rows
        .filter(row => row.trim())
        .map((row) => {
          console.log(row);
          // Handle CSV parsing more robustly - split by comma but handle quoted fields
          const csvParts = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
          const dateStr = csvParts[0];
          const wordCountStr = csvParts[1];

          const cleanDateStr = dateStr?.trim().replace(/"/g, '');

          // Parse date properly - iOS Safari is strict about date formats
          let finalDate: Date;

          if (cleanDateStr && cleanDateStr.match(/^\d{1,2}\/\d{1,2}(\/\d{2,4})?$/)) {
            // Handle M/D, M/D/YY, or M/D/YYYY format
            const parts = cleanDateStr.split('/');
            const month = parseInt(parts[0]);
            const day = parseInt(parts[1]);
            let year = parts[2] ? parseInt(parts[2]) : 26; // Default to 2026 if no year

            // Convert 2-digit year to 4-digit year
            if (year < 100) {
              year = 2000 + year;
            }

            // Fix year if it's 2001-2024, assume it should be 2025
            if (year >= 2001 && year <= 2024) {
              year = 2025;
            }

            // Create date using constructor (more reliable on iOS)
            finalDate = new Date(year, month - 1, day); // month is 0-indexed
          } else {
            return null;
          }

          if (isNaN(finalDate.getTime())) {
            return null;
          }

          const wordCount = parseInt(wordCountStr?.trim().replace(/"/g, '')) || 0;

          return {
            date: finalDate.toISOString().split('T')[0],
            wordCount
          };
        })
        .filter(item => {
          const isValid = item !== null;
          return isValid;
        })
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

      setData(processedData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const getWordsWrittenForDate = (date: string): number => {
    // First try exact match
    let currentIndex = data.findIndex(entry => entry.date === date);

    // If no exact match, try normalized date comparison
    if (currentIndex === -1) {
      currentIndex = data.findIndex(entry => {
        const entryDate = new Date(entry.date).toISOString().split('T')[0];
        return entryDate === date;
      });
    }

    if (currentIndex === -1) return 0;

    const currentEntry = data[currentIndex];
    const previousEntry = currentIndex > 0 ? data[currentIndex - 1] : null;

    if (!previousEntry) return currentEntry.wordCount;
    return Math.max(0, currentEntry.wordCount - previousEntry.wordCount);
  };

  const getIntensityClass = (wordsWritten: number): string => {
    if (wordsWritten === 0) return 'bg-gray-100';
    if (wordsWritten < 100) return 'bg-green-200';
    if (wordsWritten < 500) return 'bg-green-300';
    if (wordsWritten < 1000) return 'bg-green-400';
    return 'bg-green-500';
  };

  const generateDateRange = (): string[] => {
    const dates: string[] = [];

    // Show past 3 months
    const endDate = new Date(); // Today
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 8); // 3 months ago

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      dates.push(d.toISOString().split('T')[0]);
    }
    return dates;
  };

  const getMonthLabel = (date: string): string => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[new Date(date).getMonth()];
  };

  if (loading) {
    return (
      <div className={`${className} animate-pulse`}>
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${className} text-red-500 text-sm`}>
        {t('error')}: {error}
      </div>
    );
  }

  const dateRange = generateDateRange();
  const weeks: string[][] = [];
  let currentWeek: string[] = [];

  // Group dates by weeks (Sunday = 0)
  dateRange.forEach((date, index) => {
    const dayOfWeek = new Date(date).getDay();

    if (index === 0) {
      // Fill empty days at the beginning of the first week
      for (let i = 0; i < dayOfWeek; i++) {
        currentWeek.push('');
      }
    }

    currentWeek.push(date);

    if (dayOfWeek === 6 || index === dateRange.length - 1) {
      // End of week or last date
      weeks.push([...currentWeek]);
      currentWeek = [];
    }
  });

  return (
    <div className={className}>
      <div className="mb-4 w-screen -ml-6 px-6 sm:w-auto sm:ml-0 sm:px-0">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{t('title')}</h3>
      </div>

      <div className="overflow-x-auto max-w-full">
        <div className="inline-block relative">
          {/* Month labels */}
          <div className="flex mb-1">
            {weeks.map((week, weekIndex) => {
              const firstDate = week.find(d => d !== '');
              const prevWeek = weekIndex > 0 ? weeks[weekIndex - 1] : null;
              const prevFirstDate = prevWeek?.find(d => d !== '');

              // Show month label if this is the first week or if month changed from previous week
              const shouldShowMonth = firstDate && (
                weekIndex === 0 ||
                !prevFirstDate ||
                new Date(firstDate).getMonth() !== new Date(prevFirstDate).getMonth()
              );

              return (
                <div key={weekIndex} className="flex justify-center" style={{ width: '16px' }}>
                  <div className="h-3 text-xs text-gray-500 text-center" style={{ fontSize: '10px' }}>
                    {shouldShowMonth && firstDate ? getMonthLabel(firstDate) : ''}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Heatmap grid */}
          <div className="flex">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col" style={{ marginRight: '4px' }}>
                {week.map((date, dayIndex) => {
                  if (!date) {
                    return <div key={dayIndex} className="w-3 h-3 mb-1"></div>;
                  }

                  const wordsWritten = getWordsWrittenForDate(date);
                  const intensityClass = getIntensityClass(wordsWritten);

                  return (
                    <div
                      key={date}
                      className={`w-3 h-3 mb-1 rounded-sm ${intensityClass} hover:ring-2 hover:ring-gray-400 cursor-pointer transition-colors`}
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingStreakHeatmap;