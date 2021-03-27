import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timelapse'
})
export class TimelapsePipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const current: any = new Date();
    const previous: any = new Date(value * 1000);
    const elapsed = current - previous;

    let timezone_title = args.includes('update') ? 'edited ' : 'asked ';
    if (elapsed < msPerMinute) {
      return timezone_title + Math.round(elapsed / 1000) + ' seconds ago';
    }

    else if (elapsed < msPerHour) {
      return timezone_title + Math.round(elapsed / msPerMinute) + ' minutes ago';
    }

    else if (elapsed < msPerDay) {
      return timezone_title + Math.round(elapsed / msPerHour) + ' hours ago';
    }

    else if (elapsed < msPerMonth) {
      const days = Math.round(elapsed / msPerDay);
      if (days === 1) {
        return timezone_title + 'yesterday';
      } else if (days === 2) {
        return timezone_title + Math.round(elapsed / msPerDay) + ' days ago';
      }
    }

    if (args.includes('onlyago')) {
      var Difference_In_Days = Math.floor(elapsed / (1000 * 3600 * 24));
      const data = this.calculateTimimg(Difference_In_Days)
      if (data.years > 0) {
        if (data.months > 0) {
          if (data.years > 1)
            if (data.months > 1)
              return data.years + ' years, ' + data.months + ' months ago';
            else
              return data.years + ' years, ' + data.months + ' month ago';
          else
            if (data.months > 1)
              return data.years + ' year, ' + data.months + ' months ago';
            else
              return data.years + ' year, ' + data.months + ' month ago';
        } else {
          if (data.years > 1)
            return data.years + ' years ago';
          else
            return data.years + ' year ago';
        }
      } else {
        if (data.months > 0) {
          if (data.months > 1)
            return data.months + ' months ago';
          else
            return data.months + ' month ago';
        } else {
          if (data.days > 0)
            return data.days + ' days ago';
          else
            return data.days + ' day ago';
        }
      }
    } else {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = months[previous.getMonth()];
      const year = previous.getFullYear();
      const date = previous.getDate();
      const hour = previous.getHours();
      const min = previous.getMinutes();
      const sec = previous.getSeconds();
      return timezone_title + month + ' ' + date + " '" + year.toString().substr(-2) + ' at ' + hour + ':' + min;
    }

  }

  calculateTimimg(d) {
    let months = 0, years = 0, days = 0, weeks = 0;
    while (d) {
      if (d >= 365) {
        years++;
        d -= 365;
      } else if (d >= 30) {
        months++;
        d -= 30;
      } else if (d >= 7) {
        weeks++;
        d -= 7;
      } else {
        days++;
        d--;
      }
    };
    return {
      years, months, weeks, days
    };
  };

}


