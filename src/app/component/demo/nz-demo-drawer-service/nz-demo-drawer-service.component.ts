import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd';

@Component({
  selector: 'app-nz-demo-drawer-service',
  templateUrl: './nz-demo-drawer-service.component.html',
  styleUrls: ['./nz-demo-drawer-service.component.css']
})

export class NzDemoDrawerServiceComponent implements OnInit{

  @ViewChild('drawerTemplate') drawerTemplate;
  @ViewChild('drawerCustomTemplate') drawerCustomTemplate;

  value = "字符串"; // 字符串
  constructor(
    private drawerService: NzDrawerService
  ) {

  }

  ngOnInit() {
    // this.openTemplate();
  }
  openTemplate(): void {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Template',
      nzContent: this.drawerTemplate,
      nzContentParams: {
        value: this.value
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Template) open');
    });

    drawerRef.afterClose.subscribe(() => {
      console.log('Drawer(Template) close');
    });
  }

  openComponent(): void {
    const drawerCustomRef = this.drawerService.create({
      nzTitle: '防错校准',
      nzContent: this.drawerCustomTemplate,
      nzContentParams: {
        value: this.value
      }
    });

    drawerCustomRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });
    drawerCustomRef.afterClose.subscribe(data => {
      console.log('Drawer(Component) close');
      console.log(data);
    });
  }

}
