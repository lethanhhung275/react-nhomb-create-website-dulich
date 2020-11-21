import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
function Nav() {
  return (
    <nav className='sc-bdfBwQ bDIZHP'>
      <a aria-current='page' className='sc-gsTCUz cYmCdw active' href='/'>
        <img src='/images/logo1.PNG' alt='logo' />
      </a>
      <div className='sc-dlfnbm iBgfwH'>
        <a aria-current='page' className='sc-gsTCUz cYmCdw active' href='/'>
          Trang Chủ
        </a>
        <a
          className='sc-gsTCUz cYmCdw active'
          href='/diadiemDl'
          aria-current='page'
        >
          Địa Điểm Du Lịch
        </a>
        <a className='sc-gsTCUz cYmCdw' href='/diadiemAn'>
          Địa Điểm Ăn Uống
        </a>
        <a className='sc-gsTCUz cYmCdw' href='/camnangDl'>
          Cẩm Nang Du Lịch
        </a>
        <a className='sc-gsTCUz cYmCdw' href='/sign-up'>
          Đăng Ký
        </a>
        <div className='nav-bar'>
          <ul>
            <li className='active'>
              <i className='fas fa-search' />
              <div className='search-box'>
                <input placeholder='Tìm kiếm...' type='text' />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <nav className='sc-hKgILt lgISdP'>
        <a className='sc-eCssSg dSvCqJ' href='/signin'>
          Đăng Nhập
        </a>
      </nav>
    </nav>
  )
}
export default Nav;