import {AfterViewInit, Component, ElementRef, Input, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';

import outputTypes from '../previewOutput';
import {AnimationsPage} from '../../pages/animations/animations';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'ws-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('myCanvas', {static: true})
  myCanvas: ElementRef<HTMLCanvasElement>;
  @Input('pattern') pattern: any;
  @Input('typeId') typeId: number;
  @Input('groupId') groupId: number;
  @Input('hidePatternName') hidePatternName = false;
  private interval: any;
  public context: CanvasRenderingContext2D;
  requestId = null;
  lastTime = null;
  outputType;
  previewCanvas;
  controls = [{type: 'slider'}];

  constructor(private ngZone: NgZone,
              private translateService: TranslateService) {

  }

  //
  // upper_bound(s, val) {
  //   const temp = [...s];
  //   temp.sort((a, b) => a.numPixels - b.numPixels);
  //   return temp[temp.indexOf(val) + 1];
  // }
  //
  // closestGreaterPixelCount(arr, n) {
  //   // Insert all array elements into a Set
  //   const ts = new Set();
  //   for (let i = 0; i < n; i++)
  //     ts.add(arr[i]);
  //
  //   // Find smallest greater element for
  //   // every array element
  //   for (let i = 0; i < n; i++) {
  //     const greater = this.upper_bound(ts, arr[i]);
  //
  //     if (!greater)
  //       console.error('No Animation export with enough LEDs found! Weird, since the jacket has 50 :D you rascal.')
  //     else
  //       return greater;
  //   }
  // }


  async ngOnInit() {
    // console.log('typeID: ', this.typeId);
    // console.log('groupId: ', this.groupId);
    // console.log('pattern: ', this.pattern);
    let outputKey = this.typeId + '-' + this.groupId;

    if (outputKey === '4-0') { // fanny pack 2 == fanny pack
      outputKey = '2-0';
    } else if (outputKey === '6-0') { // fanny pack 2 == fanny pack
      outputKey = '1-0';
    }

    if (outputTypes.hasOwnProperty(outputKey)) {
      this.outputType = outputTypes[outputKey];
    } else {
      console.error('Preview function did not find this product!');
      return;
    }

    // assumes this.pattern.typePreviews[outputKey] to have previews for this type, if not then???
    console.log('outputKey: ', outputKey);

    // if croptop, set the previews to use jacket preview data, since it's the only one with at least 8 leds.
    if (outputKey === '5-0') { // TODO remove this after adding the heuristic
      // reset the outputkey now, after we already received the convas data, to another product,
      // so we can retrieve its animation preview data
      outputKey = '3-0';
    }

    this.pattern.typePromises = this.pattern.typePromises || {};
    // start decoding the base64 jpeg and draw into a canvas if not already in process/done
    if (!this.pattern.typePromises[outputKey]) {


      // let preview
      // if (!this.pattern.typePreviews.hasOwnProperty(outputKey)) {
      //   const patternNumPixels = outputTypes[outputKey].numPixels;
      //   let fick = this.closestGreaterPixelCount(outputTypes, patternNumPixels);
      //
      // }
// TODO complete the heuristic above. Idea: if there's no pre-calculated preview for this product type,
      // try to find the closest match with equal or more LEDs.


      const previewData = this.pattern.typePreviews[outputKey];
      this.pattern.typePromises[outputKey] = new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = image.width;
          canvas.height = image.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(image, 0, 0, image.width, image.height);
          resolve(canvas);
        };
        image.src = 'data:image/jpeg;base64,' + previewData;
      });
    }

    this.previewCanvas = await this.pattern.typePromises[outputKey];
  }

  animate(t) {
    this.requestId = requestAnimationFrame((t) => this.animate(t));
    if (this.lastTime && t - this.lastTime < 33 || !this.previewCanvas) {
      return;
    }
    this.lastTime = t;

    const frame = (t / 33) % this.previewCanvas.height;
    // TODO grab colors pixeldata from the appropriate bit of pattern for this frame
    const ctx = this.previewCanvas.getContext('2d');
    const colors = ctx.getImageData(0, frame, this.previewCanvas.width, 1).data;
    this.outputType.drawFn(this.context, colors);
  }

  ngAfterViewInit(): void {
    this.context = this.myCanvas.nativeElement.getContext('2d');
    this.ngZone.runOutsideAngular(() => {
      this.requestId = requestAnimationFrame((t) => this.animate(t));
    });
  }

  ngOnDestroy(): void {
    if (this.requestId) {
      cancelAnimationFrame(this.requestId);
    }
  }
}
