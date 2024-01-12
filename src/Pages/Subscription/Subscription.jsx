import React, { useState } from 'react';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { selectGlobal } from '@/Redux/Features/globalSlice';
import {
  selectSubPlan,
  selectSubValidity,
} from '@/Redux/Features/userDatasSlice';
import { pricingPlan } from '@/components/AllData';
import { useSelector } from 'react-redux';
import './Subscription.scss';
import { FaCircle } from 'react-icons/fa';
import CurrentSub from '@/components/DashboardComps/SubscriptionComps/CurrentSub';
import { selectUserData } from '@/Redux/Features/userAuthSlice';
import PlanSummary from '@/components/DashboardComps/SubscriptionComps/PlanSummary';

const Subscription = () => {
  const toggle = useSelector(selectGlobal);
  const { authUser } = useSelector(selectUserData);
  const checkActivePlan = useSelector(selectSubPlan);
  const checkPlanValidity = useSelector(selectSubValidity);
  const { handleShow } = useGlobalHooks();
  const [plans, setPlans] = useState('Monthly');

  const [planData, setPlanData] = useState({
    agent_id: authUser.userId,
    planNumber: 0,
    DurationOfPlan: 0,
  });

  const handleTabs = (plan) => {
    setPlans(plan);
  };
  const getSubScriptionPlan = (id, Data) => {
    const selectedPlan = Data.find((plan) => plan.id === id);
    if (id.includes('Monthly')) {
      setPlanData((prev) => ({
        ...prev,
        planNumber: selectedPlan.planNumber,
        DurationOfPlan: 30,
      }));
    } else {
      setPlanData((prev) => ({
        ...prev,
        planNumber: selectedPlan.planNumber,
        DurationOfPlan: 365,
      }));
    }
  };

  return (
    <main className='subscription'>
      <section className='container'>
        <header className='plan text-center my-5'>
          <h2>Current Plan</h2>
        </header>

        <CurrentSub
          currentPlanData={checkActivePlan}
          subId={checkPlanValidity}
        />
      </section>
      <section>
        <header className='plan text-center my-5'>
          <h2>Please select your preferred plan</h2>
        </header>
        <section className='container container-plans'>
          <div>
            <article className='d-flex justify-content-center gap-5'>
              <div
                className={plans === 'Monthly' ? 'tab active-tabs' : 'tab'}
                onClick={() => handleTabs('Monthly')}
              >
                Monthly
              </div>

              <div
                className={plans === 'Yearly' ? 'tab active-tabs' : 'tab'}
                onClick={() => handleTabs('Yearly')}
              >
                Yearly
              </div>
            </article>
          </div>

          <article className='content-tabs my-5'>
            {plans === 'Monthly' && (
              <section id='Monthly' className=' d-flex flex-wrap gap-2'>
                {pricingPlan.Monthly.map(
                  ({ id, title, desc, benefits, price }) => (
                    <aside
                      className='d-flex flex-column justify-content-between'
                      key={id}
                    >
                      <div className='planCard'>
                        <hgroup className='planCardHeader'>
                          <h3>{title}</h3>
                        </hgroup>

                        <section className='planCardBody'>
                          <p>{desc}</p>
                          <div className='my-3'>
                            {price === 0 ? (
                              <h3>Free</h3>
                            ) : (
                              <h3>
                                ₦{price}
                                <span className='month'>\month</span>
                              </h3>
                            )}
                          </div>
                          {benefits.map(({ id, li }) => (
                            <ul className='' key={id}>
                              <li className='d-flex gap-2 py-2'>
                                <div>
                                  <FaCircle color='#CBD5E0' size={10} />
                                </div>
                                <span>{li}</span>
                              </li>
                            </ul>
                          ))}
                        </section>
                      </div>

                      <section
                        className={
                          title.includes('Gold')
                            ? 'isSubGoldBtn text-center'
                            : 'subBtn text-center'
                        }
                      >
                        {checkActivePlan &&
                        checkActivePlan?.planName
                          ?.toLowerCase()
                          .includes(title.toLowerCase()) &&
                        checkActivePlan.HowManyDaysPlan <= 30 ? (
                          <div className=' d-flex flex-column'>
                            <button
                              id={id}
                              className=' my-3'
                              type='button'
                              // onClick={() => {
                              //   getSubScriptionPlan(id, pricingPlan.Monthly);
                              //   handleShow(id);
                              // }}
                            >
                              Current Plan
                            </button>

                            {/* <button
                              type='button'
                              onClick={() => handleShow(`cancel${id}`)}
                              className='cancelSub'
                            >
                              Cancel Subscription
                            </button> */}
                          </div>
                        ) : price === 0 ? (
                          ''
                        ) : (
                          <button
                            id={id}
                            className=' my-3'
                            type='button'
                            onClick={() => {
                              getSubScriptionPlan(id, pricingPlan.Monthly);
                              handleShow(id);
                            }}
                          >
                            Subscribe
                          </button>
                        )}
                      </section>
                      {/* {toggle[`cancel${id}`] && (
                      <Delete
                        id={`cancel${id}`}
                        title="Are you sure you'd like to cancel this subscription? "
                        subTitle='This you will not be able to reverse this action '
                        actionTitle='Cancel Subscription'
                        action={() => handleShow(`cancel${id}`)}
                        close={() => handleShow(`cancel${id}`)}
                      />
                    )}*/}

                      {toggle[id] && (
                        <PlanSummary
                          planData={planData}
                          id={id}
                          close={() => handleShow(id)}
                        />
                      )}
                    </aside>
                  ),
                )}
              </section>
            )}
            {plans === 'Yearly' && (
              <section id='Monthly' className=' d-flex flex-wrap gap-2'>
                {pricingPlan.Yearly.map(
                  ({ id, title, desc, benefits, price }) => (
                    <aside
                      className='d-flex flex-column justify-content-between'
                      key={id}
                    >
                      <div className='planCard'>
                        <hgroup className='planCardHeader'>
                          <h3>{title}</h3>
                        </hgroup>

                        <section className='planCardBody'>
                          <p>{desc}</p>
                          <div className='my-3'>
                            {price === 0 ? (
                              <h3>Free</h3>
                            ) : (
                              <h3>
                                ₦{price}
                                <span className='month'>\month</span>
                              </h3>
                            )}
                          </div>
                          {benefits.map(({ id, li }) => (
                            <ul className='' key={id}>
                              <li className='d-flex gap-2 py-2'>
                                <div>
                                  <FaCircle color='#CBD5E0' size={10} />
                                </div>
                                <span>{li}</span>
                              </li>
                            </ul>
                          ))}
                        </section>
                      </div>

                      <section
                        className={
                          title.includes('Gold')
                            ? 'isSubGoldBtn text-center'
                            : 'subBtn text-center'
                        }
                      >
                        {checkActivePlan &&
                        checkActivePlan?.planName
                          ?.toLowerCase()
                          .includes(title.toLowerCase()) &&
                        checkActivePlan.HowManyDaysPlan === 365 ? (
                          <div className='d-flex flex-column'>
                            <button
                              id={id}
                              className=' my-3'
                              type='button'
                              // onClick={() => {
                              //   getSubScriptionPlan(id, pricingPlan.Yearly);
                              //   handleShow(id);
                              // }}
                            >
                              Current Plan
                            </button>
                            <button
                              type='button'
                              onClick={() => handleShow(`cancel${id}`)}
                              className='cancelSub'
                            >
                              Cancel Subscription
                            </button>
                          </div>
                        ) : price === 0 ? (
                          ''
                        ) : (
                          <button
                            id={id}
                            className='my-3'
                            type='button'
                            onClick={() => {
                              getSubScriptionPlan(id, pricingPlan.Yearly);
                              handleShow(id);
                            }}
                          >
                            Subscribe
                          </button>
                        )}
                      </section>

                      {/* {toggle[`cancel${id}`] && (
                      <Delete
                        title="Are you sure you'd like to cancel this subscription? "
                        subTitle='This you will not be able to reverse this action '
                        actionTitle='Cancel Subscription'
                        action={() => handleShow(`cancel${id}`)}
                      />
                    )} */}
                      {toggle[id] && (
                        <PlanSummary
                          planData={planData}
                          id={id}
                          close={() => handleShow(id)}
                        />
                      )}
                    </aside>
                  ),
                )}
              </section>
            )}
          </article>
        </section>
      </section>
    </main>
  );
};

export default Subscription;
