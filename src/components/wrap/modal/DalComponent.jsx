import React from 'react';
import $ from 'jquery';

export default function DalComponent({ onCloseCalendar, dateSubmit }) {
  const onClickCloseCalendar = () => {
    onCloseCalendar();
  };

  const onClickDate = () => {
    const result = $('#dateInput').val();
    dateSubmit(result);
    onCloseCalendar();
  };

  React.useEffect(() => {
    let selNum = [];

    $('.dal td').click(function (e) {
      e.preventDefault();

      let clickNum = parseInt($(this).text());

      if (selNum.length === 2) {
        $('.dal td').removeClass('on on2 big');
        selNum = [];
      }

      $(this).toggleClass('on');

      if ($(this).hasClass('on')) {
        selNum.push(clickNum);
      } else {
        let index = selNum.indexOf(clickNum);
        selNum.splice(index, 1);
      }

      if (selNum.length === 2) {
        let start = Math.min(selNum[0], selNum[1]);
        let end = Math.max(selNum[0], selNum[1]);

        $('.dal td').each(function () {
          let number = parseInt($(this).text());
          if (number > start && number < end) {
            $(this).addClass('on2');
          }
        });

        let bigNum = $('.dal td.on').not('.on2').filter(function () {
          return parseInt($(this).text()) === end;
        });

        bigNum.addClass('big');
        let startDate = new Date(2023, 5, start);
        let endDate = new Date(2023, 5, end);

        let startDateString = formatDate(startDate);
        let endDateString = formatDate(endDate);

        let result =
          startDateString +
          '(' +
          getDayOfWeek(startDate) +
          ') ~ ' +
          endDateString +
          '(' +
          getDayOfWeek(endDate) +
          ')';

        $('#dateInput').val(result);
        $('#dateInput').attr('value', result);
        $('.dal-btn').addClass('on');
      }
    });

    function formatDate(date) {
      let day = date.getDate();
      let month = date.getMonth() + 1;
      return month + '월 ' + day + '일';
    }

    function getDayOfWeek(date) {
      let daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
      return daysOfWeek[date.getDay()];
    }
  });

  return (
    <div className="dal">
      <div className="dal1">
        <div className="dal-header">
          <h1>2023.06</h1>
          <button onClick={onClickCloseCalendar}>
            <img src="./img/calendar/popupCloseBtn.png" alt="" />
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>일</th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='date-empty'></td>
              <td className='date-empty'></td>
              <td className='date-empty'></td>
              <td className='date-empty'></td>             
              <td className='date-empty'>1</td>
              <td className='date-empty'>2</td>
              <td className='date-empty'>3</td>
            </tr>
            <tr>
              <td className='date-empty'>4</td>
              <td className='date-empty'>5</td>
              <td className='date-empty'>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
            </tr>
            <tr>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
            </tr>
            <tr>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td className='date-empty'></td>
            </tr>
          </tbody>
        </table>
        
        <button className='dal-btn' onClick={onClickDate}><input id="dateInput" type="text" />선택</button>
      </div>
      {/* <div className="dal1">
        <div className="dal-header">
          <h1>2023.07</h1>
          <button onClick={onClickCloseCalendar}>
            <img src="./img/calendar/popupCloseBtn.png" alt="" />
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>일</th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='date-empty'></td>
              <td className='date-empty'></td>
              <td className='date-empty'></td>
              <td className='date-empty'></td>
              <td className='date-empty'></td>
              <td className='date-empty'></td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
            </tr>
            <tr>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
            </tr>
            <tr>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
            </tr>
            <tr>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
            </tr>
            <tr>
              <td>30</td>
              <td>31</td>
              <td className='date-empty'></td>
              <td className='date-empty'></td>
              <td className='date-empty'></td>
              <td className='date-empty'></td>
              <td className='date-empty'></td>
            </tr>
          </tbody>
        </table>
        
        <button className='dal-btn' onClick={onClickDate}><input id="dateInput" type="text" />선택</button>
      </div> */}
    </div>
  );
}