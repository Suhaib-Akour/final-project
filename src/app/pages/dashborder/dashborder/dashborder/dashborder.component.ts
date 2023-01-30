import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StartupsService } from 'src/app/core/services/startups.service';
import { UploadService } from 'src/app/core/services/upload.service';
import { Location } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Startup } from 'src/app/core/interfaces/startups';
import { AuthService } from 'src/app/core/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dashborder',
  templateUrl: './dashborder.component.html',
  styleUrls: ['./dashborder.component.css']
})
export class DashborderComponent implements OnInit {
  // key: string = '';
  // formGroup: FormGroup;
  // imgSrc: any;
  // constructor(
  //   private activatedRoute: ActivatedRoute,
  //   private _startupService: StartupsService,
  //   private _uploadService: UploadService,
  //   private location: Location,
  //   private formBuilder: FormBuilder
  // ) {
  //   this.formGroup = this.formBuilder.group({
  //     city: null,
  //     emailAddress: [null, [Validators.email, Validators.required]],
  //     logo: null,
  //     name: [null, [Validators.required]],
  //     FounderName: [null, [Validators.required]],
  //     numberOfEmployees: null,
  //     sectors: [null, [Validators.required]],
  //     websiteUrl: [null, [Validators.required]],
  //     yearOfEstablish: null,
  //   });
  // }

  // ngOnInit(): void {
  //   this.activatedRoute.queryParams.subscribe((result) => {
  //     if (result['key']) {
  //       this.key = result['key'];
  //       this.getById();
  //     }
  //   });
  // }

  // getById() {
  //   this._startupService.getById(this.key).subscribe((result:any) => {
  //     this.formGroup = this.formBuilder.group({
  //       city: result['city'],
  //       emailAddress: [result['emailAddress'], [Validators.email, Validators.required]],
  //       logo: result['logo'],
  //       name: [result['name'], [Validators.required]],
  //       numberOfEmployees: result['numberOfEmployees'],
  //       sectors: [result['sectors'], [Validators.required]],
  //       websiteUrl: [result['websiteUrl'], [Validators.required]],
  //       yearOfEstablish: result['yearOfEstablish'],
  //     })
  //     this.imgSrc = result['logo'];
  //   });
  // }

  // getErrorMessage(control: any) {
  //   if (control && control.errors) {
  //     if (control.hasError('required')) {
  //       return 'You must enter a value';
  //     }
  //     if (control.hasError('email')) {
  //       return 'Not a valid email';
  //     }
  //   }
  //   return '';
  // }

  // onUpdateClicked() {
  //   if (this.formGroup.invalid) {
  //     this.validateFormGroup();
  //   } else {
  //     if (this.formGroup.controls['logo'].value) {
  //       this.upload();
  //     } else {
  //       this.updateStartup();
  //     }
  //   }
  // }
  // upload() {
  //   this._uploadService
  //     .upload(this.formGroup.controls['logo'].value)
  //     .subscribe((file) => {
  //       if (file?.metadata) {
  //         this.getDownloadURL();
  //       }
  //     });
  // }

  // getDownloadURL() {
  //   this._uploadService.getDownloadURL().subscribe((url) => {
  //     console.log();
  //     this.formGroup.controls['logo'].setValue(url);
  //     this.updateStartup();
  //   });
  // }

  // updateStartup() {
  //   this._startupService
  //     .update(this.key, {
  //       name: this.formGroup.controls['name'].value,
  //       FounderName:this.formGroup.controls['FounderName'].value,
  //       emailAddress: this.formGroup.controls['emailAddress'].value,
  //       websiteUrl: this.formGroup.controls['websiteUrl'].value,
  //       sectors: this.formGroup.controls['sectors'].value,
  //       city: this.formGroup.controls['city'].value,
  //       numberOfEmployees: this.formGroup.controls['numberOfEmployees'].value,
  //       logo: this.formGroup.controls['logo'].value,
  //       yearOfEstablish: this.formGroup.controls['yearOfEstablish'].value,
  //     })
  //     .then(() => {
  //       this.location.back();
  //     });
  // }

  // onFileInputChange($event: any) {
  //   console.log($event);
  //   this.formGroup.controls['logo'].setValue($event.target.files[0]);

  //   const reader = new FileReader();
  //   reader.onload = (e) => (this.imgSrc = reader.result);
  //   reader.readAsDataURL(this.formGroup.controls['logo'].value);
  // }

  // validateFormGroup() {
  //   Object.keys(this.formGroup.controls).forEach((filed) => {
  //     const control = this.formGroup.get(filed);
  //     control?.markAsTouched({ onlySelf: true });
  //   });
  // }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<Startup>([]);
  displayedColumns = ['name', 'emailAddress', 'sectors', 'city','actions'];
  userData: any;
  loading = true;

  constructor(
    private _startupsService: StartupsService,
    private router: Router,
    private _authService: AuthService,

  ) {
  }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.getuserInfo();
    console.log(this.getAllData())
  }

  getuserInfo() {
    this._authService.userInfo.subscribe((user) => {
      this.userData = user;
      console.log(this.userData);
      if (this.userData.role) {
        if(this.userData.role === 'admin'){
          this.displayedColumns.push('actions')
        }
        this.getAllData();

      }
    });
  }

  getAllData() {
    this._startupsService.getAll().subscribe((result: any) => {
      if (result) {
        this.dataSource = new MatTableDataSource(result);
        console.log(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource._updateChangeSubscription();
        this.loading = false;
      }
    });
  }
  applyFilter($event: any) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onEditClicked(row: Startup) {
    this.router.navigate(['/dashborder/update-startup'], {
      queryParams: {
        key: row.key,
      },
    });
  }
  onDeleteClicked(row: Startup) {
    this._startupsService.delete(row.key).then(() => {
      window.alert('Deleted sucsesfull');
    });
  }

  onAddClicked() {
    this.router.navigate(['/startup/add-startup']);
  }

  onRowClicked(row: Startup) {
    this.router.navigate(['/dashborder/update-startup'], {
      queryParams: {
        key: row.key,
      },
    });
  }

  onRequestNewStartup() {
    this.router.navigate(['/startup/request-startup']);
  }
}
