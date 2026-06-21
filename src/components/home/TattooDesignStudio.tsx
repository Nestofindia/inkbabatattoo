'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Wand2,
  MapPin,
  Palette,
  Layers,
  BookOpen,
  Loader2,
  RefreshCw,
  Send,
  ImageIcon,
} from 'lucide-react';
import LazyImage from '@/components/shared/LazyImage';
import {
  TATTOO_CULTURE_STYLES,
  TATTOO_PLACEMENTS,
  TATTOO_SIZES,
} from '@/config/ai';
import { WHATSAPP_URL } from '@/config/links';
import { generateTattooDesign } from '@/services/tattooDesignService';
import type { TattooDesignResult } from '@/types/tattooDesign';

const TattooDesignStudio: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [placement, setPlacement] = useState<string>(TATTOO_PLACEMENTS[0]);
  const [cultureStyle, setCultureStyle] = useState<string>(TATTOO_CULTURE_STYLES[0]);
  const [size, setSize] = useState<string>(TATTOO_SIZES[1]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [design, setDesign] = useState<TattooDesignResult | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const runGenerate = async () => {
    setError(null);
    setDesign(null);
    setImageLoaded(false);
    setLoading(true);

    const result = await generateTattooDesign({ idea, placement, cultureStyle, size });

    setLoading(false);

    if (!result.success || !result.design) {
      setError(result.error ?? 'Could not generate design.');
      return;
    }

    setDesign(result.design);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    await runGenerate();
  };

  const whatsappMessage = design
    ? encodeURIComponent(
        `Hi Ink Baba! I tried your AI Tattoo Studio and love this concept:\n\n"${design.title}"\nPlacement: ${design.placement}\nStyle: ${design.cultureType}\n\nCan we book a consultation to refine it?`
      )
    : '';

  return (
    <section className="py-24 bg-gradient-to-br from-traditional-900 via-traditional-800 to-traditional-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-mandala-subtle opacity-[0.07]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/20 border border-accent-400/30 text-accent-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI Tattoo Studio — powered by Groq
          </div>

          <h2 className="text-4xl md:text-5xl font-special font-bold mb-6 text-white">
            Dream Your{' '}
            <span className="font-logo font-condensed-bold text-accent-400">Custom Ink</span>
          </h2>
          <p className="text-lg md:text-xl text-traditional-200 max-w-3xl mx-auto leading-relaxed font-body">
            Describe your vision — placement, culture, meaning — and our AI crafts a realistic concept
            with symbolism, style notes, and a visual preview you can bring to the studio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleGenerate}
            className="card-traditional bg-white/95 backdrop-blur p-8 md:p-10 h-fit"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-accent-100">
                <Wand2 className="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <h3 className="text-xl font-special font-bold text-traditional-900">Your Vision</h3>
                <p className="text-traditional-500 text-sm font-body">Tell us what you want on your skin</p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="tattoo-idea" className="block text-sm font-semibold text-traditional-800 mb-2">
                  Tattoo idea &amp; meaning
                </label>
                <textarea
                  id="tattoo-idea"
                  rows={4}
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="e.g. A lotus rising from waves — rebirth after a hard year, spiritual but not religious..."
                  className="w-full rounded-xl border border-traditional-200 px-4 py-3 text-traditional-800 font-body focus:outline-none focus:ring-2 focus:ring-accent-400 resize-none"
                  maxLength={500}
                  required
                />
                <p className="text-xs text-traditional-400 mt-1 text-right">{idea.length}/500</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="placement" className="block text-sm font-semibold text-traditional-800 mb-2">
                    <MapPin className="w-3.5 h-3.5 inline mr-1" />
                    Placement
                  </label>
                  <select
                    id="placement"
                    value={placement}
                    onChange={(e) => setPlacement(e.target.value)}
                    className="w-full rounded-xl border border-traditional-200 px-4 py-3 text-traditional-800 font-body focus:outline-none focus:ring-2 focus:ring-accent-400 bg-white"
                  >
                    {TATTOO_PLACEMENTS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="size" className="block text-sm font-semibold text-traditional-800 mb-2">
                    Size
                  </label>
                  <select
                    id="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full rounded-xl border border-traditional-200 px-4 py-3 text-traditional-800 font-body focus:outline-none focus:ring-2 focus:ring-accent-400 bg-white"
                  >
                    {TATTOO_SIZES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="culture" className="block text-sm font-semibold text-traditional-800 mb-2">
                  <Layers className="w-3.5 h-3.5 inline mr-1" />
                  Culture / style
                </label>
                <select
                  id="culture"
                  value={cultureStyle}
                  onChange={(e) => setCultureStyle(e.target.value)}
                  className="w-full rounded-xl border border-traditional-200 px-4 py-3 text-traditional-800 font-body focus:outline-none focus:ring-2 focus:ring-accent-400 bg-white"
                >
                  {TATTOO_CULTURE_STYLES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {error && (
                <p className="text-red-600 text-sm font-body bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading || !idea.trim()}
                className="btn-primary w-full text-lg font-logo font-condensed-bold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Creating your design...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Generate Custom Design
                  </span>
                )}
              </button>

              <p className="text-xs text-traditional-400 text-center font-body">
                AI preview for inspiration only — your Ink Baba artist will refine the final piece.
              </p>
            </div>
          </motion.form>

          {/* Result */}
          <motion.div
            className="min-h-[480px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {loading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full min-h-[480px] rounded-3xl border-2 border-dashed border-traditional-600/50 flex flex-col items-center justify-center gap-4 p-8"
                >
                  <Loader2 className="w-12 h-12 text-accent-400 animate-spin" />
                  <p className="text-traditional-200 font-body text-center">
                    Crafting symbolism, placement flow &amp; visual preview...
                    <span className="block text-sm text-traditional-400 mt-2">This can take up to 30 seconds</span>
                  </p>
                </motion.div>
              )}

              {!loading && !design && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full min-h-[480px] rounded-3xl border-2 border-dashed border-traditional-600/40 flex flex-col items-center justify-center gap-4 p-8 text-center"
                >
                  <ImageIcon className="w-16 h-16 text-traditional-500" />
                  <p className="text-traditional-300 font-body max-w-sm">
                    Your custom concept, culture notes, and tattoo preview will appear here.
                  </p>
                </motion.div>
              )}

              {!loading && design && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-3xl overflow-hidden bg-white shadow-traditional"
                >
                  {/* Image preview */}
                  <div className="relative aspect-square bg-traditional-100">
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="w-10 h-10 text-accent-500 animate-spin" />
                      </div>
                    )}
                    <LazyImage
                      src={design.imageUrl}
                      alt={`AI tattoo design preview: ${design.title}`}
                      eager
                      className={`w-full h-full object-contain bg-traditional-50 transition-opacity duration-500 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageLoaded(true)}
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {design.styleTags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-traditional-900/80 text-white text-xs font-medium backdrop-blur"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 md:p-8 space-y-5">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-special font-bold text-traditional-900 mb-2">
                        {design.title}
                      </h3>
                      <p className="text-traditional-700 font-body leading-relaxed">{design.description}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <InfoChip icon={<MapPin className="w-4 h-4" />} label="Placement" value={design.placement} />
                      <InfoChip icon={<Layers className="w-4 h-4" />} label="Culture / Style" value={design.cultureType} />
                      <InfoChip icon={<Palette className="w-4 h-4" />} label="Colors" value={design.colorPalette} />
                      <InfoChip icon={<BookOpen className="w-4 h-4" />} label="Size" value={design.sizeRecommendation} />
                    </div>

                    <div className="rounded-xl bg-traditional-50 border border-traditional-200 p-4">
                      <p className="text-sm font-semibold text-traditional-800 mb-1">Symbolism</p>
                      <p className="text-traditional-600 font-body text-sm leading-relaxed">{design.symbolism}</p>
                    </div>

                    <p className="text-xs text-traditional-500 font-body italic">{design.healingNotes}</p>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => void runGenerate()}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-traditional-300 text-traditional-800 font-medium hover:bg-traditional-50 transition-colors"
                      >
                        <RefreshCw className="w-4 h-4" />
                        Regenerate
                      </button>
                      <a
                        href={`${WHATSAPP_URL}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary text-center font-logo font-condensed-bold inline-flex items-center justify-center gap-2"
                      >
                        Book This Concept
                        <Send className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InfoChip: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
}> = ({ icon, label, value }) => (
  <div className="rounded-xl bg-accent-50/80 border border-accent-100 p-3">
    <div className="flex items-center gap-1.5 text-accent-700 text-xs font-semibold mb-1">
      {icon}
      {label}
    </div>
    <p className="text-traditional-800 text-sm font-body leading-snug">{value}</p>
  </div>
);

export default TattooDesignStudio;
