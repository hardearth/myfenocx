import { Typography, Grid } from '@mui/material';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import user from 'data/user';
import funding from 'data/admin/funding';
import Transfer from 'sections/Transfer';
import PayAux from 'sections/PayAux';
import toast from 'react-hot-toast';

const App = () => {
  const [value, setValue] = useState();
  const [info, setInfo] = useState();

  function getDate(date) {
    let request = new Date(Date.parse(date));
    return request.toDateString();
  }

  function getValue(_idValue, item) {
    let val = 0;
    item.map((element) => {
      if (_idValue === element._id) {
        val = element.value;
      }
    });
    return val;
  }

  function diffSubtract(date2) {
    let date_1 = new Date();
    let date_2 = new Date(date2);
    let day_as_milliseconds = 86400000;
    let diff_in_mil = date_2 - date_1;
    let diff_in_days = diff_in_mil / day_as_milliseconds;
    return parseInt(diff_in_days);
  }

  function activateAccount(item, idType, idPackage, idValue, user, password, code) {
    let pack = filterIt(item.packages, idPackage);
    let type = filterIt(item.types, idType);

    let total = pack.value;
    let real = '';
    let sub = 0;
    if (type.real) {
      total = total + getValue(idValue, item.values);
      real = ' Real Account';
      sub = getValue(idValue, item.values);
    }
    setInfo(
      <>
        <span className="h5">Funding account activation</span> <br />
        <span>
          Package name
          <b className="mx-2">
            {pack.name}
            {real}
          </b>
        </span>
        <span>
          + Value subscription
          <b className="ms-2">{sub}</b>
        </span>
      </>
    );
    setValue(total);
    console.log({ item, idType, idPackage, idValue, user, password, code });
    document.getElementById('btnPayAux').click(); // open/close
  }

  function updateCredentials(item, idType, user, password, code) {
    console.log({ item, idType, user, password, code });
    toast('Updating credentials', {
      duration: 3000,
      position: 'top-right'
    });
  }

  function transfer() {
    document.getElementById('btnTransfer').click(); // open/close
  }

  function payFee(idRef) {
    let item = getDataElement(idRef);
    setValue(item.fee);
    setInfo(
      <>
        <span className="h5">Pay fee</span> <br />
        <span>
          Fee
          <b className="ms-2">{item.fee} USD</b>
        </span>
      </>
    );
    document.getElementById('btnPayAux').click(); // open/close
  }

  function getDataElement(id) {
    let obj = {};
    user.funding.map((element) => {
      if (id === element._idRef) {
        obj = element;
      }
    });
    return obj;
  }

  function filterIt(obj, id) {
    let request = {};
    obj.map((value) => {
      if (id === value._id) {
        request = value;
      }
    });
    return request;
  }

  return (
    <>
      <Transfer objUser={user.funding} objAdmin={funding.funding} />
      <PayAux value={value} info={info} />
      <div className="container">
        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom>
            <FormattedMessage id="funding" />
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            <FormattedMessage id="funding" /> / <FormattedMessage id="account" />
          </Typography>
        </Grid>

        <div className="row">
          {funding.funding.map((item) => {
            let _idTypeAux = item.types[0]._id;
            let _idPackageAux = item.packages[0]._id;
            let _idValueAux = item.values[0]._id;
            let userAux = '';
            let passwordAux = '';
            let codeAux = '';

            let account = <></>;
            let state = <></>;
            let user = <></>;
            let password = <></>;
            let server = <></>;
            let real = <></>;
            let fee = <></>;
            let credentials = <></>;
            let url = <></>;
            let selects = (
              <>
                <Typography variant="body2" className="text-secondary mb-2">
                  Enter the following data
                </Typography>
                <span className="small text-secondary">Account or ID</span>
                <input
                  className="form-control form-control-sm bg-dark border-secondary text-light mb-2"
                  type="text"
                  onChange={(e) => (userAux = e.target.value)}
                />
                <span className="small text-secondary">Password</span>
                <input
                  className="form-control form-control-sm bg-dark border-secondary text-light mb-2"
                  type="text"
                  onChange={(e) => (passwordAux = e.target.value)}
                />
                <span className="small text-secondary">Type of account</span>
                <select
                  className="form-select form-select-sm bg-dark border-secondary text-light mb-2"
                  onChange={(e) => (_idTypeAux = e.target.value)}
                >
                  {item.types.map((type) => (
                    <option key={type._id} value={type._id}>
                      {type.name}
                    </option>
                  ))}
                </select>
                <span className="small text-secondary">Package</span>
                <select
                  className="form-select form-select-sm bg-dark border-secondary text-light mb-2"
                  onChange={(e) => (_idPackageAux = e.target.value)}
                >
                  {item.packages.map((pack) => (
                    <option key={pack._id} value={pack._id}>
                      {pack.name} ({pack.value} USD)
                    </option>
                  ))}
                </select>
                <span className="small text-secondary">Subscription</span>
                <select
                  className="form-select form-select-sm bg-dark border-secondary text-light mb-2"
                  onChange={(e) => (_idValueAux = e.target.value)}
                >
                  {item.values.map((val) => (
                    <option key={val._id} value={val._id}>
                      {val.name} ({val.value} USD)
                    </option>
                  ))}
                </select>
                <span className="small text-secondary">Code</span>
                <div className="row mb-3">
                  <div className="col-7">
                    <input
                      className="form-control form-control-sm bg-dark border-secondary text-light"
                      type="text"
                      placeholder="Enter code"
                      onChange={(e) => (codeAux = e.target.value)}
                    />
                  </div>
                  <div className="col-5 text-end">
                    <button className="btn btn-sm text-light bg-black">
                      <b className="small"> Send code</b>
                    </button>
                  </div>
                </div>
                <button
                  className="btn rounded-0 text-light bg-blue"
                  onClick={() => activateAccount(item, _idTypeAux, _idPackageAux, _idValueAux, userAux, passwordAux, codeAux)}
                >
                  Activate account
                </button>
              </>
            );

            let obj = getDataElement(item._id);
            if (Object.keys(obj).length > 0) {
              let typeData = filterIt(item.types, obj._idType);
              let packageData = filterIt(item.packages, obj._idPackage);

              account = (
                <Typography variant="body2">
                  Account
                  <b className="ms-2">
                    {typeData.name}
                    <span className="text-secondary ms-2">
                      {packageData.name} - {packageData.value}
                    </span>
                  </b>
                </Typography>
              );
              if (obj.state) {
                state = (
                  <>
                    <Typography variant="body2" className="state">
                      <b className="bg-success rounded px-2">Active</b>
                    </Typography>
                    <button className="card bg-yellow mb-1" onClick={() => transfer()}>
                      <Typography variant="caption" className="text-light">
                        Subscribed on {getDate(obj.startsAt)}
                      </Typography>
                      <Typography variant="caption" className="text-light">
                        Expires {getDate(obj.expiresAt)}
                      </Typography>
                      <Typography variant="caption" className="text-light">
                        Active subscription
                      </Typography>
                      <Typography variant="caption" className="text-light">
                        ${getValue(obj._idValue, item.values)}
                      </Typography>
                      <Typography variant="caption" className="text-light text-end w-100">
                        Expires in {diffSubtract(obj.expiresAt)} days
                      </Typography>
                    </button>
                  </>
                );
              } else {
                state = (
                  <>
                    <Typography variant="body2" className="state">
                      <b className="bg-danger rounded px-2">Inactive</b>
                    </Typography>
                    <button className="card bg-red mb-1" onClick={() => transfer()}>
                      <Typography variant="caption" className="text-light">
                        Expired subscription or fee debt
                      </Typography>
                      <Typography variant="h5" className="text-light">
                        ${getValue(obj._idValue, item.values)}
                      </Typography>
                      <Typography variant="caption" className="text-light text-end w-100">
                        Pay subscription
                      </Typography>
                    </button>
                  </>
                );
              }
              user = (
                <Typography variant="body2">
                  Account ID
                  <b className="ms-2">{obj.user}</b>
                </Typography>
              );
              let countLetters = obj.password.length;
              let str = '*';
              password = (
                <Typography variant="body2">
                  Password
                  <b className="ms-2">
                    {str.repeat(countLetters - 3)}
                    {obj.password.slice(countLetters - 3)}
                  </b>
                </Typography>
              );
              server = (
                <Typography variant="body2">
                  Server
                  <b className="ms-2">{obj.server}</b>
                </Typography>
              );
              if (typeData.real) {
                real = (
                  <Typography variant="body2">
                    Broker mode
                    <b className="bg-yellow rounded px-2 ms-2">Real</b>
                  </Typography>
                );
              } else {
                real = (
                  <Typography variant="body2">
                    Broker mode
                    <b className="bg-blue rounded px-2 ms-2">{typeData.name}</b>
                  </Typography>
                );
                if (obj.state) {
                  credentials = (
                    <>
                      <Typography variant="body2" className="text-secondary my-2">
                        If you already completed this mode update the credentials
                      </Typography>
                      <span className="small text-secondary">Account or ID</span>
                      <input
                        className="form-control form-control-sm bg-dark border-secondary text-light mb-2"
                        type="text"
                        onChange={(e) => (userAux = e.target.value)}
                      />
                      <span className="small text-secondary">Password</span>
                      <input
                        className="form-control form-control-sm bg-dark border-secondary text-light mb-2"
                        type="text"
                        onChange={(e) => (passwordAux = e.target.value)}
                      />
                      <span className="small text-secondary">Type of account</span>
                      <select
                        className="form-select form-select-sm bg-dark border-secondary text-light mb-2"
                        onChange={(e) => (_idTypeAux = e.target.value)}
                      >
                        {item.types.map((type) => (
                          <option key={type._id} value={type._id}>
                            {type.name}
                          </option>
                        ))}
                      </select>
                      <span className="small text-secondary">Code</span>
                      <div className="row mb-3">
                        <div className="col-7">
                          <input
                            className="form-control form-control-sm bg-dark border-secondary text-light"
                            type="text"
                            placeholder="Enter code"
                            onChange={(e) => (codeAux = e.target.value)}
                          />
                        </div>
                        <div className="col-5 text-end">
                          <button className="btn btn-sm text-light bg-black">
                            <b className="small"> Send code</b>
                          </button>
                        </div>
                      </div>
                      <button
                        className="btn rounded-0 text-light bg-green"
                        onClick={() => updateCredentials(item, _idTypeAux, userAux, passwordAux, codeAux)}
                      >
                        Update credentials
                      </button>
                    </>
                  );
                }
              }
              if (obj.fee > 0) {
                fee = (
                  <>
                    <button className="btn text-center text-light bg-red card mb-2" onClick={() => payFee(obj._idRef)}>
                      Pay ${obj.fee} USD fee
                    </button>
                  </>
                );
                credentials = <></>;
              }
              url = (
                <Typography variant="body2">
                  Link funding
                  <b className="ms-2">
                    <a href={item.url} rel="noreferrer" target="_blank" className="small text-light">
                      {item.url}
                    </a>
                  </b>
                </Typography>
              );
              selects = <></>;
            }
            return (
              <div key={item._id} className="col-12 col-lg-3 p-2 text-light">
                <div className="text-start bg-dark card rounded p-4">
                  <Typography variant="h3" className="text-center mb-3 text-secondary">
                    {item.name}
                    {url}
                  </Typography>
                  {state}
                  {fee}
                  {account}
                  {user}
                  {password}
                  {server}
                  {real}
                  {credentials}
                  {selects}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
