import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <pre>{{data}}</pre>
      <hr>
      <pre [innerHTML]="result"></pre>
    </div>    
  `
})
export class AppComponent implements OnInit{
  data: string = `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, impedit! weldbook.ru Aliquam at consectetur culpa dignissimos doloribus eaque libero nostrum quos suscipit unde!
weldbook.ru/new Aliquam at consectetur culpa dignissimos doloribus eaque libero nostrum quos suscipit unde!

weldbook.ru

http://weldbook.ru
http://weldbook.ru/new
https://weldbook.ru/
Lorem ipsum dolor sit amet, consectetur adipisicing elit. https://weldbook.ru/new Aliquam at consectetur culpa dignissimos doloribus eaque libero nostrum quos suscipit unde!

https://master.review.weldbook.ru/new
Lorem ipsum dolor sit amet, consectetur adipisicing elit. https://develop.review.weldbook.ru/new Aliquam at consectetur culpa dignissimos doloribus eaque libero nostrum quos suscipit unde!

https://master.review.weldbook.com/new
https://develop.review.weldbook.com/new
Lorem https://develop.review.weldbook.com ipsum

weldbook.com
weldbook.ru/new

https://beta.weldbook.ru/new/laboratory/ndt/journals/tt?qwe=1df
https://beta.weldbook.ru/new/laboratory/ndt/journals/tt?qwe&asd

Aliquam at consectetur culpa dignissimos doloribus eaque libero nostrum quos suscipit unde!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. https://beta.weldbook.ru/new/laboratory/ndt/journals/tt?qwe=1&asd=2&zxc=3df Aliquam at consectetur culpa dignissimos doloribus eaque libero nostrum quos suscipit unde!
`;
  result: string;

  urlStrObj = {
    protocol: '(?:(?<protocol>https?)(?::\\/\\/))?',
    subDomains: '(?<subDomains>(?:[\\w-]+\\.)*)',
    domainName: '(?<domainName>[\\w-]+)',
    domainZone: '(?:\\.(?<domainZone>\\w{2,})(?=[\\s\\/]))',
    urlPath: '(?<urlPath>(?:\\/[\\w-]+)*)',
    urlPam: '(?:\\?(?<urlPam>\\w+(?:=\\w+)?(?:&\\w+(?:=\\w+)?)*))?'
  }

  urlStr = Object.values(this.urlStrObj).join('');

  ngOnInit(): void {
    console.log(this.urlStr)
    const urlRegex = new RegExp(this.urlStr, 'g')

    const urlMatch = this.data.match(urlRegex);

    console.log(urlMatch);


    let resExec

    while (resExec = urlRegex.exec(this.data)) {
      console.log(resExec);
    }

    this.result = this.data.replace(urlRegex, '<a href="$&">$&<\a>')


  }
}
