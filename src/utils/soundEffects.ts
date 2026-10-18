/**
 * Lightweight Web Audio API synthesizer for luxury micro-interactions.
 * Completely client-side, zero external audio assets or network requests.
 */

class SoundController {
  private ctx: AudioContext | null = null;
  private isEnabled: boolean = false;

  constructor() {
    // sound is disabled by default to respect user audio preferences
    this.isEnabled = false;
  }

  public toggle(): boolean {
    this.isEnabled = !this.isEnabled;
    if (this.isEnabled) {
      this.playChime();
    }
    return this.isEnabled;
  }

  public getStatus(): boolean {
    return this.isEnabled;
  }

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playClick() {
    if (!this.isEnabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(640, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {
      // Audio error safe
    }
  }

  public playChime() {
    if (!this.isEnabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
      notes.forEach((freq, index) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + index * 0.06);

        gain.gain.setValueAtTime(0.03, this.ctx.currentTime + index * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + index * 0.06 + 0.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + index * 0.06);
        osc.stop(this.ctx.currentTime + index * 0.06 + 0.2);
      });
    } catch {
      // Audio error safe
    }
  }
}

export const soundManager = new SoundController();
