/**
 * 工具方法
 * @param type  导出文件的类型：png、pdf
 * @param id  导出文档HTML节点ID
 */
import fileSaver from 'file-saver';
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// 用户点击保存
export function saveAs(type, id) {
  // png保存
  if (type === 'png') {
    console.log('saveAsType....png');
    let resume = document.getElementById(id);
    html2canvas(resume).then(function (canvas) {
      canvas.toBlob(function (blob) {
        fileSaver.saveAs(blob, 'resume.png');
      });
    });
  }
  // pdf保存
  if (type === 'pdf') {
    let resume = document.getElementById(id);
    html2canvas(resume).then(function (canvas) {
      // 通过html2canvas将html渲染成canvas，然后获取图片数据
      let imgData = canvas.toDataURL('image/jpeg');

      // 初始化pdf，设置相应格式
      let doc = new JsPDF('p', 'mm', 'a4');

      // 这里设置的是a4纸张尺寸
      doc.addImage(imgData, 'JPEG', 0, 0, 210, 297);

      // 输出保存命名为content的pdf
      doc.save('resume.pdf');
    });
  }
}
