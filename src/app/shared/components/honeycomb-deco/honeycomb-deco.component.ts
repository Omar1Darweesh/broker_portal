import { Component } from '@angular/core';

const HEX_R = 36;
const HEX_COL = HEX_R * 1.5;
const HEX_ROW = HEX_R * Math.sqrt(3);
const VBOX_W = 400;
const VBOX_H = 580;
const WAVE_DUR = 3.5;
const MAX_DIST = Math.sqrt(VBOX_W * VBOX_W + VBOX_H * VBOX_H);

function hexPts(cx: number, cy: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (i * Math.PI) / 3;
    return `${(cx + HEX_R * Math.cos(a)).toFixed(1)},${(cy + HEX_R * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
}

function buildHexCells(): { cx: number; cy: number; pts: string }[] {
  const cols = Math.ceil(VBOX_W / HEX_COL) + 3;
  const rows = Math.ceil(VBOX_H / HEX_ROW) + 3;
  const list: { cx: number; cy: number; pts: string }[] = [];
  /* Start one column/row before 0 so hexes at the corner are not clipped at x=0/y=0 */
  for (let c = -1; c < cols; c++) {
    for (let r = -1; r < rows; r++) {
      const cx = c * HEX_COL;
      const cy = r * HEX_ROW + (c % 2) * (HEX_ROW / 2);
      list.push({ cx, cy, pts: hexPts(cx, cy) });
    }
  }
  return list;
}

@Component({
  selector: 'app-honeycomb-deco',
  standalone: true,
  styles: [
    `:host {
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      display: block;
    }`,
  ],
  template: `
    <div class="form-deco" aria-hidden="true">
      <svg class="form-deco-svg form-deco-tr" [attr.viewBox]="'0 0 ' + vboxW + ' ' + vboxH" aria-hidden="true">
        @for (cell of hexCells; track $index) {
          <polygon
            class="hc hc-navy"
            [attr.points]="cell.pts"
            [style.animation-delay]="delayTopRight(cell.cx, cell.cy)"
          />
        }
      </svg>
      <svg class="form-deco-svg form-deco-bl" [attr.viewBox]="'0 0 ' + vboxW + ' ' + vboxH" aria-hidden="true">
        @for (cell of hexCells; track $index) {
          <polygon
            class="hc hc-gold"
            [attr.points]="cell.pts"
            [style.animation-delay]="delayBottomLeft(cell.cx, cell.cy)"
          />
        }
      </svg>
    </div>
  `,
})
export class HoneycombDecoComponent {
  readonly vboxW = VBOX_W;
  readonly vboxH = VBOX_H;
  readonly hexCells = buildHexCells();

  delayTopRight(cx: number, cy: number): string {
    const dx = VBOX_W - cx;
    const d = Math.sqrt(dx * dx + cy * cy);
    return `${((d / MAX_DIST) * WAVE_DUR).toFixed(2)}s`;
  }

  delayBottomLeft(cx: number, cy: number): string {
    const dy = VBOX_H - cy;
    const d = Math.sqrt(cx * cx + dy * dy);
    return `${((d / MAX_DIST) * WAVE_DUR).toFixed(2)}s`;
  }
}
