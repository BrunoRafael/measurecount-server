import td from 'testdouble';
import chai from 'chai';
import app from '../../app';

global.app=app;
global.td = td;
global.expect = chai.expect;