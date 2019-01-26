import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';


@Component({
  selector: 'app-nz-demo-upload-picture-card',
  templateUrl: './nz-demo-upload-picture-card.component.html',
  styleUrls: ['./nz-demo-upload-picture-card.component.css']
})
export class NzDemoUploadPictureCardComponent implements OnInit{
  @Input() nzUploadNum = 1; // 上传数量
  @Input() nzAction = "https://jsonplaceholder.typicode.com/posts/"; // 上传图片接口地址

  fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: 1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];
  previewImage = '';
  previewVisible = false;

  constructor(private msg: NzMessageService) {}

  ngOnInit(){ }

  /**
   * 图片上传回调
   * @param file
   * @param fileList
   */
  uploadChange ({ file, fileList }){
    const status = file.status;
    const response = file.response;
    if (status === 'removed') {
      this.fileListRemove(file.uid); // 删除其中一条数据
      return ;
    }

    console.log(this.fileList);
    if (status === 'done' /*&& response.code === 0*/) {
      this.msg.success(`${file.name} img uploaded successfully.`);
      // this.modalData['data']['render_pic'] = response.data; // 图片上传成功后，更新模板id
      // console.log(this.modalData['data']);
    } else if (status === 'error') {
      this.msg.error(`${file.name} img upload failed.`);
    }
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };

  /**
   * 删除某个图片
   */
  fileListRemove(uid){
    this.fileList.splice(this.fileList.findIndex(v => v.uid === uid), 1);
  }
}
