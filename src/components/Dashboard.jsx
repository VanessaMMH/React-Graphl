import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Dashboard.scss';
import plusIcon from '../assets/img/plusButton.svg';
import spreadIcon from '../assets/img/spread.svg';
import alarmIcon from '../assets/img/alarm.svg';
import userIcon from '../assets/img/people.png';
import clipIcon from '../assets/img/clip.svg';
import shareIcon from '../assets/img/share.svg';
import comentIcon from '../assets/img/coment.svg';

const Dashboard = () => (
    <div className="dashboard" id="dashboard">
        <div className="dashboard__head">
            <ul className="breadcrumb">
                <li>
                    <Link to='/'>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z" />
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link to='/tasks'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H8V8H0V0ZM0 10H8V18H0V10ZM10 0H18V8H10V0ZM10 10H18V18H10V10ZM12 2V6H16V2H12ZM12 12V16H16V12H12ZM2 2V6H6V2H2ZM2 12V16H6V12H2Z" />
                        </svg>
                    </Link>
                </li>
            </ul>
            <Link to='/add'>
                <div className="dashboard__head--btn">

                    <img
                        className="dashboard__img"
                        src={plusIcon}
                        alt="plusIcon"
                    />

                </div>
            </Link>
        </div>
        <div className="dashboard__card--grid">
            <div className="dashboard__card--item">
                <div className="dashboard__card--item-head">
                    <p>Working</p>
                    <p>(03)</p>
                </div>
                <div className="dashboard__card--item-body">
                    <div className="card__header">
                        <p> Google  </p>
                        <Link to='/dashboard'>
                            <img
                                className="dashboard__img"
                                src={spreadIcon}
                                alt="spreadIcon"
                            />
                        </Link>


                    </div>
                    <div className="card__body">
                        <div className="tags tag__content">
                            <span>4 Points</span>
                            <div className="tag__timer">
                                <Link to='/dashboard'>
                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0001 20.0001C9.81817 20.0001 8.64785 19.7673 7.55592 19.315C6.46399 18.8627 5.47184 18.1998 4.63611 17.364C3.80038 16.5283 3.13745 15.5362 2.68515 14.4442C2.23286 13.3523 2.00007 12.182 2.00007 11.0001C2.00007 9.81817 2.23286 8.64785 2.68515 7.55592C3.13745 6.46399 3.80038 5.47184 4.63611 4.63611C5.47184 3.80038 6.46399 3.13745 7.55592 2.68515C8.64785 2.23286 9.81817 2.00007 11.0001 2.00007C13.387 2.00007 15.6762 2.94828 17.364 4.63611C19.0519 6.32394 20.0001 8.61312 20.0001 11.0001C20.0001 13.387 19.0519 15.6762 17.364 17.364C15.6762 19.0519 13.387 20.0001 11.0001 20.0001ZM11.0001 18.0001C11.9193 18.0001 12.8296 17.819 13.6789 17.4672C14.5281 17.1154 15.2998 16.5998 15.9498 15.9498C16.5998 15.2998 17.1154 14.5281 17.4672 13.6789C17.819 12.8296 18.0001 11.9193 18.0001 11.0001C18.0001 10.0808 17.819 9.17057 17.4672 8.32129C17.1154 7.47201 16.5998 6.70033 15.9498 6.05032C15.2998 5.40031 14.5281 4.8847 13.6789 4.53291C12.8296 4.18113 11.9193 4.00007 11.0001 4.00007C9.14355 4.00007 7.36308 4.73757 6.05032 6.05032C4.73757 7.36308 4.00007 9.14355 4.00007 11.0001C4.00007 12.8566 4.73757 14.6371 6.05032 15.9498C7.36308 17.2626 9.14355 18.0001 11.0001 18.0001ZM12.0001 11.0001H15.0001V13.0001H10.0001V6.00007H12.0001V11.0001ZM0.74707 4.28207L4.28207 0.74707L5.69707 2.16107L2.16007 5.69707L0.74707 4.28207ZM17.7171 0.74707L21.2531 4.28207L19.8391 5.69707L16.3031 2.16107L17.7181 0.74707H17.7171Z" />
                                    </svg>
                                    <p>6 JULY,2020</p>
                                </Link>
                            </div>
                        </div>

                        <div className="tags">
                            <div className="tag__timer tag__ios">
                                <p>IOS APP</p>
                            </div>
                            <div className="tag__timer tag__android">
                                <p>ANDROID</p>
                            </div>
                        </div>

                    </div>
                    <div className="card__footer">
                        <img
                            className='search__form--profile'
                            src={userIcon}
                            alt="Usuario"
                        />
                        <div className="card__footer--reactions">
                            <div className="tag__content">
                                <img
                                    className='search__form--profile'
                                    src={clipIcon}
                                    alt="clipIcon"
                                />

                            </div>
                            <div className="tag__content">
                                <p>5</p>
                                <img
                                    className='search__form--profile'
                                    src={shareIcon}
                                    alt="shareIcon"
                                />

                            </div>
                            <div className="tag__content">
                                <p>3</p>
                                <img
                                    className='search__form--profile'
                                    src={comentIcon}
                                    alt="comentIcon"
                                />

                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div className="dashboard__card--item">
                <div className="dashboard__card--item-head">
                    <p>In Progress</p>
                    <p>(03)</p>
                </div>
                <div className="dashboard__card--item-body">
                    <div className="card__header">
                        <p> Google  </p>
                        <Link to='/dashboard'>
                            <img
                                className="dashboard__img"
                                src={spreadIcon}
                                alt="spreadIcon"
                            />
                        </Link>
                    </div>
                    <div className="card__body">
                        <div className="tags tag__content">
                            <span>4 Points</span>
                            <div className="tag__timer">
                                <Link to='/dashboard'>
                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0001 20.0001C9.81817 20.0001 8.64785 19.7673 7.55592 19.315C6.46399 18.8627 5.47184 18.1998 4.63611 17.364C3.80038 16.5283 3.13745 15.5362 2.68515 14.4442C2.23286 13.3523 2.00007 12.182 2.00007 11.0001C2.00007 9.81817 2.23286 8.64785 2.68515 7.55592C3.13745 6.46399 3.80038 5.47184 4.63611 4.63611C5.47184 3.80038 6.46399 3.13745 7.55592 2.68515C8.64785 2.23286 9.81817 2.00007 11.0001 2.00007C13.387 2.00007 15.6762 2.94828 17.364 4.63611C19.0519 6.32394 20.0001 8.61312 20.0001 11.0001C20.0001 13.387 19.0519 15.6762 17.364 17.364C15.6762 19.0519 13.387 20.0001 11.0001 20.0001ZM11.0001 18.0001C11.9193 18.0001 12.8296 17.819 13.6789 17.4672C14.5281 17.1154 15.2998 16.5998 15.9498 15.9498C16.5998 15.2998 17.1154 14.5281 17.4672 13.6789C17.819 12.8296 18.0001 11.9193 18.0001 11.0001C18.0001 10.0808 17.819 9.17057 17.4672 8.32129C17.1154 7.47201 16.5998 6.70033 15.9498 6.05032C15.2998 5.40031 14.5281 4.8847 13.6789 4.53291C12.8296 4.18113 11.9193 4.00007 11.0001 4.00007C9.14355 4.00007 7.36308 4.73757 6.05032 6.05032C4.73757 7.36308 4.00007 9.14355 4.00007 11.0001C4.00007 12.8566 4.73757 14.6371 6.05032 15.9498C7.36308 17.2626 9.14355 18.0001 11.0001 18.0001ZM12.0001 11.0001H15.0001V13.0001H10.0001V6.00007H12.0001V11.0001ZM0.74707 4.28207L4.28207 0.74707L5.69707 2.16107L2.16007 5.69707L0.74707 4.28207ZM17.7171 0.74707L21.2531 4.28207L19.8391 5.69707L16.3031 2.16107L17.7181 0.74707H17.7171Z" />
                                    </svg>
                                    <p>6 JULY,2020</p>
                                </Link>
                            </div>
                        </div>

                        <div className="tags">
                            <div className="tag__timer tag__ios">
                                <p>IOS APP</p>
                            </div>
                            <div className="tag__timer tag__android">
                                <p>ANDROID</p>
                            </div>
                        </div>

                    </div>
                    <div className="card__footer">
                        <img
                            className='search__form--profile'
                            src={userIcon}
                            alt="Usuario"
                        />
                        <div className="card__footer--reactions">
                            <div className="tag__content">
                                <img
                                    className='search__form--profile'
                                    src={clipIcon}
                                    alt="clipIcon"
                                />

                            </div>
                            <div className="tag__content">
                                <p>5</p>
                                <img
                                    className='search__form--profile'
                                    src={shareIcon}
                                    alt="shareIcon"
                                />

                            </div>
                            <div className="tag__content">
                                <p>3</p>
                                <img
                                    className='search__form--profile'
                                    src={comentIcon}
                                    alt="comentIcon"
                                />

                            </div>
                        </div>
                    </div>


                </div>

                <div className="dashboard__card--item-body">
                    <div className="card__header">
                        <p> Google  </p>
                        <Link to='/dashboard'>
                            <img
                                className="dashboard__img"
                                src={spreadIcon}
                                alt="spreadIcon"
                            />
                        </Link>
                    </div>
                    <div className="card__body">
                        <div className="tags tag__content">
                            <span>4 Points</span>
                            <div className="tag__timer">
                                <Link to='/dashboard'>
                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0001 20.0001C9.81817 20.0001 8.64785 19.7673 7.55592 19.315C6.46399 18.8627 5.47184 18.1998 4.63611 17.364C3.80038 16.5283 3.13745 15.5362 2.68515 14.4442C2.23286 13.3523 2.00007 12.182 2.00007 11.0001C2.00007 9.81817 2.23286 8.64785 2.68515 7.55592C3.13745 6.46399 3.80038 5.47184 4.63611 4.63611C5.47184 3.80038 6.46399 3.13745 7.55592 2.68515C8.64785 2.23286 9.81817 2.00007 11.0001 2.00007C13.387 2.00007 15.6762 2.94828 17.364 4.63611C19.0519 6.32394 20.0001 8.61312 20.0001 11.0001C20.0001 13.387 19.0519 15.6762 17.364 17.364C15.6762 19.0519 13.387 20.0001 11.0001 20.0001ZM11.0001 18.0001C11.9193 18.0001 12.8296 17.819 13.6789 17.4672C14.5281 17.1154 15.2998 16.5998 15.9498 15.9498C16.5998 15.2998 17.1154 14.5281 17.4672 13.6789C17.819 12.8296 18.0001 11.9193 18.0001 11.0001C18.0001 10.0808 17.819 9.17057 17.4672 8.32129C17.1154 7.47201 16.5998 6.70033 15.9498 6.05032C15.2998 5.40031 14.5281 4.8847 13.6789 4.53291C12.8296 4.18113 11.9193 4.00007 11.0001 4.00007C9.14355 4.00007 7.36308 4.73757 6.05032 6.05032C4.73757 7.36308 4.00007 9.14355 4.00007 11.0001C4.00007 12.8566 4.73757 14.6371 6.05032 15.9498C7.36308 17.2626 9.14355 18.0001 11.0001 18.0001ZM12.0001 11.0001H15.0001V13.0001H10.0001V6.00007H12.0001V11.0001ZM0.74707 4.28207L4.28207 0.74707L5.69707 2.16107L2.16007 5.69707L0.74707 4.28207ZM17.7171 0.74707L21.2531 4.28207L19.8391 5.69707L16.3031 2.16107L17.7181 0.74707H17.7171Z" />
                                    </svg>
                                    <p>6 JULY,2020</p>
                                </Link>
                            </div>
                        </div>

                        <div className="tags">
                            <div className="tag__timer tag__ios">
                                <p>IOS APP</p>
                            </div>
                            <div className="tag__timer tag__android">
                                <p>ANDROID</p>
                            </div>
                        </div>

                    </div>
                    <div className="card__footer">
                        <img
                            className='search__form--profile'
                            src={userIcon}
                            alt="Usuario"
                        />
                        <div className="card__footer--reactions">
                            <div className="tag__content">
                                <img
                                    className='search__form--profile'
                                    src={clipIcon}
                                    alt="clipIcon"
                                />

                            </div>
                            <div className="tag__content">
                                <p>5</p>
                                <img
                                    className='search__form--profile'
                                    src={shareIcon}
                                    alt="shareIcon"
                                />

                            </div>
                            <div className="tag__content">
                                <p>3</p>
                                <img
                                    className='search__form--profile'
                                    src={comentIcon}
                                    alt="comentIcon"
                                />

                            </div>
                        </div>
                    </div>


                </div>
                <div className="dashboard__card--item-body">
                    <div className="card__header">
                        <p> Google  </p>
                        <Link to='/dashboard'>
                            <img
                                className="dashboard__img"
                                src={spreadIcon}
                                alt="spreadIcon"
                            />
                        </Link>
                    </div>
                    <div className="card__body">
                        <div className="tags tag__content">
                            <span>4 Points</span>
                            <div className="tag__timer">
                                <Link to='/dashboard'>
                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0001 20.0001C9.81817 20.0001 8.64785 19.7673 7.55592 19.315C6.46399 18.8627 5.47184 18.1998 4.63611 17.364C3.80038 16.5283 3.13745 15.5362 2.68515 14.4442C2.23286 13.3523 2.00007 12.182 2.00007 11.0001C2.00007 9.81817 2.23286 8.64785 2.68515 7.55592C3.13745 6.46399 3.80038 5.47184 4.63611 4.63611C5.47184 3.80038 6.46399 3.13745 7.55592 2.68515C8.64785 2.23286 9.81817 2.00007 11.0001 2.00007C13.387 2.00007 15.6762 2.94828 17.364 4.63611C19.0519 6.32394 20.0001 8.61312 20.0001 11.0001C20.0001 13.387 19.0519 15.6762 17.364 17.364C15.6762 19.0519 13.387 20.0001 11.0001 20.0001ZM11.0001 18.0001C11.9193 18.0001 12.8296 17.819 13.6789 17.4672C14.5281 17.1154 15.2998 16.5998 15.9498 15.9498C16.5998 15.2998 17.1154 14.5281 17.4672 13.6789C17.819 12.8296 18.0001 11.9193 18.0001 11.0001C18.0001 10.0808 17.819 9.17057 17.4672 8.32129C17.1154 7.47201 16.5998 6.70033 15.9498 6.05032C15.2998 5.40031 14.5281 4.8847 13.6789 4.53291C12.8296 4.18113 11.9193 4.00007 11.0001 4.00007C9.14355 4.00007 7.36308 4.73757 6.05032 6.05032C4.73757 7.36308 4.00007 9.14355 4.00007 11.0001C4.00007 12.8566 4.73757 14.6371 6.05032 15.9498C7.36308 17.2626 9.14355 18.0001 11.0001 18.0001ZM12.0001 11.0001H15.0001V13.0001H10.0001V6.00007H12.0001V11.0001ZM0.74707 4.28207L4.28207 0.74707L5.69707 2.16107L2.16007 5.69707L0.74707 4.28207ZM17.7171 0.74707L21.2531 4.28207L19.8391 5.69707L16.3031 2.16107L17.7181 0.74707H17.7171Z" />
                                    </svg>
                                    <p>6 JULY,2020</p>
                                </Link>
                            </div>
                        </div>

                        <div className="tags">
                            <div className="tag__timer tag__ios">
                                <p>IOS APP</p>
                            </div>
                            <div className="tag__timer tag__android">
                                <p>ANDROID</p>
                            </div>
                        </div>

                    </div>
                    <div className="card__footer">
                        <img
                            className='search__form--profile'
                            src={userIcon}
                            alt="Usuario"
                        />
                        <div className="card__footer--reactions">
                            <div className="tag__content">
                                <img
                                    className='search__form--profile'
                                    src={clipIcon}
                                    alt="clipIcon"
                                />

                            </div>
                            <div className="tag__content">
                                <p>5</p>
                                <img
                                    className='search__form--profile'
                                    src={shareIcon}
                                    alt="shareIcon"
                                />

                            </div>
                            <div className="tag__content">
                                <p>3</p>
                                <img
                                    className='search__form--profile'
                                    src={comentIcon}
                                    alt="comentIcon"
                                />

                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="dashboard__card--item">
                <div className="dashboard__card--item-head">
                    <p>Completed</p>
                    <p>(02)</p>
                </div>

                <div className="dashboard__card--item-body">
                    <div className="card__header">
                        <p> Google  </p>
                        <Link to='/dashboard'>
                            <img
                                className="dashboard__img"
                                src={spreadIcon}
                                alt="spreadIcon"
                            />
                        </Link>
                    </div>
                    <div className="card__body">
                        <div className="tags tag__content">
                            <span>4 Points</span>
                            <div className="tag__timer">
                                <Link to='/dashboard'>
                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0001 20.0001C9.81817 20.0001 8.64785 19.7673 7.55592 19.315C6.46399 18.8627 5.47184 18.1998 4.63611 17.364C3.80038 16.5283 3.13745 15.5362 2.68515 14.4442C2.23286 13.3523 2.00007 12.182 2.00007 11.0001C2.00007 9.81817 2.23286 8.64785 2.68515 7.55592C3.13745 6.46399 3.80038 5.47184 4.63611 4.63611C5.47184 3.80038 6.46399 3.13745 7.55592 2.68515C8.64785 2.23286 9.81817 2.00007 11.0001 2.00007C13.387 2.00007 15.6762 2.94828 17.364 4.63611C19.0519 6.32394 20.0001 8.61312 20.0001 11.0001C20.0001 13.387 19.0519 15.6762 17.364 17.364C15.6762 19.0519 13.387 20.0001 11.0001 20.0001ZM11.0001 18.0001C11.9193 18.0001 12.8296 17.819 13.6789 17.4672C14.5281 17.1154 15.2998 16.5998 15.9498 15.9498C16.5998 15.2998 17.1154 14.5281 17.4672 13.6789C17.819 12.8296 18.0001 11.9193 18.0001 11.0001C18.0001 10.0808 17.819 9.17057 17.4672 8.32129C17.1154 7.47201 16.5998 6.70033 15.9498 6.05032C15.2998 5.40031 14.5281 4.8847 13.6789 4.53291C12.8296 4.18113 11.9193 4.00007 11.0001 4.00007C9.14355 4.00007 7.36308 4.73757 6.05032 6.05032C4.73757 7.36308 4.00007 9.14355 4.00007 11.0001C4.00007 12.8566 4.73757 14.6371 6.05032 15.9498C7.36308 17.2626 9.14355 18.0001 11.0001 18.0001ZM12.0001 11.0001H15.0001V13.0001H10.0001V6.00007H12.0001V11.0001ZM0.74707 4.28207L4.28207 0.74707L5.69707 2.16107L2.16007 5.69707L0.74707 4.28207ZM17.7171 0.74707L21.2531 4.28207L19.8391 5.69707L16.3031 2.16107L17.7181 0.74707H17.7171Z" />
                                    </svg>
                                    <p>6 JULY,2020</p>
                                </Link>
                            </div>
                        </div>

                        <div className="tags">
                            <div className="tag__timer tag__ios">
                                <p>IOS APP</p>
                            </div>
                            <div className="tag__timer tag__android">
                                <p>ANDROID</p>
                            </div>
                        </div>

                    </div>
                    <div className="card__footer">
                        <img
                            className='search__form--profile'
                            src={userIcon}
                            alt="Usuario"
                        />
                        <div className="card__footer--reactions">
                            <div className="tag__content">
                                <img
                                    className='search__form--profile'
                                    src={clipIcon}
                                    alt="clipIcon"
                                />

                            </div>
                            <div className="tag__content">
                                <p>5</p>
                                <img
                                    className='search__form--profile'
                                    src={shareIcon}
                                    alt="shareIcon"
                                />

                            </div>
                            <div className="tag__content">
                                <p>3</p>
                                <img
                                    className='search__form--profile'
                                    src={comentIcon}
                                    alt="comentIcon"
                                />

                            </div>
                        </div>
                    </div>


                </div>
                <div className="dashboard__card--item-body">
                    <div className="card__header">
                        <p> Google  </p>
                        <Link to='/dashboard'>
                            <img
                                className="dashboard__img"
                                src={spreadIcon}
                                alt="spreadIcon"
                            />
                        </Link>
                    </div>
                    <div className="card__body">
                        <div className="tags tag__content">
                            <span>4 Points</span>
                            <div className="tag__timer">
                                <Link to='/dashboard'>
                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0001 20.0001C9.81817 20.0001 8.64785 19.7673 7.55592 19.315C6.46399 18.8627 5.47184 18.1998 4.63611 17.364C3.80038 16.5283 3.13745 15.5362 2.68515 14.4442C2.23286 13.3523 2.00007 12.182 2.00007 11.0001C2.00007 9.81817 2.23286 8.64785 2.68515 7.55592C3.13745 6.46399 3.80038 5.47184 4.63611 4.63611C5.47184 3.80038 6.46399 3.13745 7.55592 2.68515C8.64785 2.23286 9.81817 2.00007 11.0001 2.00007C13.387 2.00007 15.6762 2.94828 17.364 4.63611C19.0519 6.32394 20.0001 8.61312 20.0001 11.0001C20.0001 13.387 19.0519 15.6762 17.364 17.364C15.6762 19.0519 13.387 20.0001 11.0001 20.0001ZM11.0001 18.0001C11.9193 18.0001 12.8296 17.819 13.6789 17.4672C14.5281 17.1154 15.2998 16.5998 15.9498 15.9498C16.5998 15.2998 17.1154 14.5281 17.4672 13.6789C17.819 12.8296 18.0001 11.9193 18.0001 11.0001C18.0001 10.0808 17.819 9.17057 17.4672 8.32129C17.1154 7.47201 16.5998 6.70033 15.9498 6.05032C15.2998 5.40031 14.5281 4.8847 13.6789 4.53291C12.8296 4.18113 11.9193 4.00007 11.0001 4.00007C9.14355 4.00007 7.36308 4.73757 6.05032 6.05032C4.73757 7.36308 4.00007 9.14355 4.00007 11.0001C4.00007 12.8566 4.73757 14.6371 6.05032 15.9498C7.36308 17.2626 9.14355 18.0001 11.0001 18.0001ZM12.0001 11.0001H15.0001V13.0001H10.0001V6.00007H12.0001V11.0001ZM0.74707 4.28207L4.28207 0.74707L5.69707 2.16107L2.16007 5.69707L0.74707 4.28207ZM17.7171 0.74707L21.2531 4.28207L19.8391 5.69707L16.3031 2.16107L17.7181 0.74707H17.7171Z" />
                                    </svg>
                                    <p>6 JULY,2020</p>
                                </Link>
                            </div>
                        </div>

                        <div className="tags">
                            <div className="tag__timer tag__ios">
                                <p>IOS APP</p>
                            </div>
                            <div className="tag__timer tag__android">
                                <p>ANDROID</p>
                            </div>
                        </div>

                    </div>
                    <div className="card__footer">
                        <img
                            className='search__form--profile'
                            src={userIcon}
                            alt="Usuario"
                        />
                        <div className="card__footer--reactions">
                            <div className="tag__content">
                                <img
                                    className='search__form--profile'
                                    src={clipIcon}
                                    alt="clipIcon"
                                />

                            </div>
                            <div className="tag__content">
                                <p>5</p>
                                <img
                                    className='search__form--profile'
                                    src={shareIcon}
                                    alt="shareIcon"
                                />

                            </div>
                            <div className="tag__content">
                                <p>3</p>
                                <img
                                    className='search__form--profile'
                                    src={comentIcon}
                                    alt="comentIcon"
                                />

                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    </div>
);


export default (Dashboard);